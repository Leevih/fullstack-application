from django.db import models

class File(models.Model):
    title = models.CharField(max_length=100)
    data = models.FileField(upload_to='file')