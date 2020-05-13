from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

from django.views.generic import TemplateView

from merhi.views import FileUploadView

router = routers.DefaultRouter()
router.register(r'file', FileUploadView, basename="file")

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),   
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
