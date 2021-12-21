from django.shortcuts import render


def index(request):
  return render(request, 'social/index.html')

def servicios(request):
  return render(request, 'social/Servicios.html')

def nosotros(request):
  return render(request, 'social/Nosotros.html')

def contactanos(request):
  return render(request, 'social/Contactanos.html')


# Create your views here.
