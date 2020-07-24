from django.contrib import admin

# Register your models here.
from .models import File, Folder

admin.site.register(File)
admin.site.register(Folder)
