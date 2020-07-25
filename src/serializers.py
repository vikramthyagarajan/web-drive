from .models import File, Folder, User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'home']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['name', 'size', 'link']

class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ['id', 'name', 'files', 'folders']