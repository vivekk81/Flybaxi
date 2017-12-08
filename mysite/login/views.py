from __future__ import unicode_literals
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from login.models import Bikes
from login.serializers import BikeSerializer
from django.shortcuts import render




def homepage(request):
    return render(request, 'index.html')

def mybike(request):
    return render(request, 'localtest.html')

def uploadimage(request):
    return render(request, 'upload.html')

@api_view(['GET','POST'])
def submitimage(request):
    if request.method == 'POST':
       serializer = BikeSerializer(data=request.data )
       if serializer.is_valid():
          serializer.save()
          return Response(serializer.data, status=status.HTTP_201_CREATED)
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def getbikes(request):
    if request.method == 'GET':
        products = Bikes.objects.all()
        serializer = BikeSerializer(products,many=True )
        s={"records":serializer.data}
        print("bikes====>",s);
        return Response(s,status=status.HTTP_201_CREATED)

@api_view(['GET','POST'])
def getselectedbike(request,bikeid):
    visitors = Bikes.objects.get(bikeid=bikeid)
    
    serializer = BikeSerializer(visitors)
    
    s={"records":serializer.data}
    
    return Response(s)



@api_view(['GET','POST'])
def getselectedbikes(request):
    if request.method == 'POST':
        products = Bikes.objects.get(bikename=request.data['bikename'])
        serializer = BikeSerializer(products,many=True )
        s={"records":serializer.data}
        return Response(s,status=status.HTTP_201_CREATED)
    return Response('yha')




@api_view(['GET','POST'])
def registration(request):
    
 
    return Response(
    'register unsuccessful',
  
    )


@api_view(['GET', 'POST'])
def registereduser(request):
    """
    List all snippets, or create a new snippet.
    """
    
    return Response("lkasdsnfns")



