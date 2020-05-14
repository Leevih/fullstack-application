# Generated by Django 3.0.6 on 2020-05-13 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200513_2217'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='docfile',
        ),
        migrations.AddField(
            model_name='file',
            name='data',
            field=models.FileField(default=1, upload_to='file'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='file',
            name='title',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
