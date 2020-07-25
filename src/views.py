from .models import File, Folder
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser
from .serializers import FileSerializer, FolderSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Create your views here.
class UserDetail(APIView):
  def get(self, request, *args, **kwargs):
    return Response({test: 3})




class FolderDetail(APIView):
  authentication_classes = []

  def get(self, request, *args, **kwargs):
    folder_id = kwargs["folder_id"]
    folder = Folder.objects.get(id = folder_id)
    serialized = FolderSerializer(folder)
    return Response(serialized.data)

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
    name = request.data["name"]
    parent = Folder.objects.get(id = folder_id)
    folder = Folder(name=name)
    folder.save()
    parent.folders.add(folder)
    serialized = FolderSerializer(folder)
    return Response(serialized.data)
    # return Response({"test": 1})


class CreateFile(APIView):
  pass

class MoveFolder(APIView):
  pass

class Search(APIView):
  pass