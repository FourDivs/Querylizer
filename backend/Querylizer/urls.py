from django.urls import path

from . import views

urlpatterns = [
    path('createTable/', views.createTable, name="createTable"),
    path('insertValue/', views.insertValue, name="insertValue"),
]
