from django.http import HttpResponse
from django.shortcuts import render


def Home(request):
    return render(request,'Home.html')

def AboutUs(request):
    return render(request,'AboutUs.html')

def Contact(request):
    return render(request,'Contact.html')
