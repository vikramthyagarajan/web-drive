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
    serialized = FolderSerializer(folder)
    return Response(serialized.data)


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
    # return Response({"test": 1})


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
  pass

class Search(APIView):
  pass