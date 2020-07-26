from .models import File, Folder, User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser
from .serializers import FileSerializer, FolderSerializer, UserSerializer, SubFolderSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Create your views here.

def all_parents(folder):
  list = [folder]
  parent = folder.parents
  print(parent.count())
  while parent.count() != 0:
    temp = parent.all()[0]
    list.insert(0, temp)
    parent = temp.parents
  return list

class UserDetail(APIView):
  def get(self, request, *args, **kwargs):
    user_id = kwargs["user_id"]
    user = User.objects.get(id = user_id)
    ser = UserSerializer(user)
    return Response(ser.data)

class FolderDetail(APIView):
  authentication_classes = []

  def get(self, request, *args, **kwargs):
    folder_id = kwargs["folder_id"]
    folder = Folder.objects.get(id = folder_id)
    list = all_parents(folder)
    print(list)
    serialized = FolderSerializer(folder)
    parents = SubFolderSerializer(list, many=True)
    merged = serialized.data
    merged["tree"] = parents.data
    return Response(merged)

  def delete(self, request, *args, **kwargs):
    folder_id = kwargs["folder_id"]
    folder = Folder.objects.get(id = folder_id)
    folder.delete()
    return Response({})

class FileDetail(APIView):
  def delete(self, request, *args, **kwargs):
    file_id = kwargs["file_id"]
    file = File.objects.get(id = file_id)
    file.delete()
    return Response({})


@method_decorator(csrf_exempt, name='dispatch')
class CreateFolder(APIView):
  parser_classes = [FormParser, MultiPartParser]
  authentication_classes = []

  @csrf_exempt
  def post(self, request, *args, **kwargs):
    folder_id = kwargs["folder_id"]
    print(request.data)
    name = request.data.get("name", "Untitled")
    parent = Folder.objects.get(id = folder_id)
    folder = Folder(name=name)
    folder.save()
    parent.folders.add(folder)
    serialized = FolderSerializer(folder)
    return Response(serialized.data)


class CreateFile(APIView):
  parser_classes = [FormParser, MultiPartParser]
  authentication_classes = []

  def post(self, request, *args, **kwargs):
    folder_id = kwargs["folder_id"]
    name = request.data["name"]
    doc = request.FILES.get('file')
    ext = doc.name.split(".")[1]
    print(doc.name)
    print(doc.size)
    print(link)
    parent = Folder.objects.get(id = folder_id)
    file = File(name=name, document=doc, size=doc.size, extension=ext, doc_name=doc.name)
    file.parent = parent
    file.save()
    parent.files.add(file)
    serialized = FileSerializer(file)
    return Response(serialized.data)

class MoveFolder(APIView):
  authentication_classes=[]

  def post(self, request, *args, **kwargs):
    from_folder = request.data.get('fromFolder')
    to_folder = request.data.get('toFolder')
    move_type = request.data.get('type')
    id = request.data.get('id')
    old_parent = Folder.objects.get(id=from_folder)
    new_parent = Folder.objects.get(id=to_folder)
    item_ser = {}
    if move_type == "folder":
      item = Folder.objects.get(id=id)
      old_parent.folders.remove(item)
      new_parent.folders.add(item)
      item_ser = FolderSerializer(item).data
    else:
      item = File.objects.get(id=id)
      item.parent = new_parent
      item.save()
      item_ser = FileSerializer(item).data
    
    par_ser = FolderSerializer(old_parent).data
    new_ser = FolderSerializer(new_parent).data
    return Response({"from": par_ser, "to": new_ser, "item": item_ser})

class Search(APIView):
  def get(self, request, *args, **kwargs):
    params = request.GET
    search_type = params.get('type')
    search_query = params.get('query')
    folders = []
    files = []
    if search_type == "folder":
      fold_raw = Folder.objects.filter(name__icontains=search_query)
      fold_ser = SubFolderSerializer(fold_raw, many=True)
      folders = fold_ser.data
    else:
      fold_raw = Folder.objects.filter(name__icontains=search_query)
      fold_ser = SubFolderSerializer(fold_raw, many=True)
      folders = fold_ser.data
      file_raw = File.objects.filter(name__icontains=search_query)
      file_ser = FileSerializer(file_raw, many=True)
      files = file_ser.data

    return Response({"folders": folders, "files": files})