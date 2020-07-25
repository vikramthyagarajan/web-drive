"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from src import views

# router = routers.DefaultRouter()
# # router.register(r'files', views.FileViewSet)
# router.register(r'folders', views.FolderRoutes.as_view())

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include(router.urls)),
    # path('api/folders/', views.FolderRoutes.as_view()),
    path('api/users/<int:user_id>/', views.UserDetail.as_view()),
    path('api/folders/<int:folder_id>/', views.FolderDetail.as_view()),
    path('api/folders/<int:folder_id>/folders/', views.CreateFolder.as_view()),
    path('api/folders/<int:folder_id>/files/', views.CreateFile.as_view()),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
