from django.urls import path,include
from polls import views

urlpatterns = [
    path('Home/',views.Home),
    path('AboutUs/',views.AboutUs),  
    path('Contact/',views.Contact)
]