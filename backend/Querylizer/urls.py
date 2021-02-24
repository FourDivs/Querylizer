from . import views
from django.urls import path

urlpatterns = [
    path('createTable/',views.createTable,name="createTable"),
]