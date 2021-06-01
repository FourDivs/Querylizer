from . import views
from django.urls import path

urlpatterns = [
    path('createTable/',views.createTable,name="createTable"),
    path('insertValue/',views.insertValue,name="insertValue"),
]