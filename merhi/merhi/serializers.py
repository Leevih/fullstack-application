from rest_framework import serializers

from merhi.models import File

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = 'id', 'title', 'file'