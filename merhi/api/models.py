from django.db import models

class File(models.Model):
    #docfile = models.FileField(upload_to='documents/%Y/%m/%d')
    title = models.CharField(max_length=100)
    data = models.FileField(upload_to='file')