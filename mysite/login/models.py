from django.db import models
from django.conf import settings

class Bikes(models.Model):
       
        bikename= models.CharField(max_length=100,blank=True,default=False)
        bikeid = models.CharField(max_length=100,blank=True)
        bikeimage = models.ImageField(upload_to='static/images',null=True, max_length=255)
        rentbelow12  = models.CharField(max_length=100,blank=True)
        rentbelow15 =  models.CharField(max_length=100,blank=True)
        rentmorethan15 = models.CharField(max_length=100,blank=True)
        
        def __str__(self):
                return self.bikename

class Register(models.Model):
    name = models.CharField(max_length=100,blank=True)
    mobilenumber = models.CharField(max_length=100)
    dlno = models.CharField(max_length=100)
    password= models.CharField(max_length=1000)
    


    def __str__(self):
        return self.name


