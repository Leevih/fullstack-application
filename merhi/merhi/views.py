from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from merhi.models import File
from merhi.serializers import FileSerializer

from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

class FileUploadView(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    def post(self, request, format=None):
        return Response({'received data': request.data})
