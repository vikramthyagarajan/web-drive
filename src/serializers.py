from .models import File, Folder, User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'home']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['name', 'size', 'document']

class SubFolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ['id', 'name']

class FolderSerializer(serializers.ModelSerializer):
    files = FileSerializer(many=True, read_only=True)
    folders = SubFolderSerializer(many=True, read_only=True)

    class Meta:
        model = Folder
        fields = ['id', 'name', 'files', 'folders', 'parents']