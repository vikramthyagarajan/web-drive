# Generated by Django 3.0.8 on 2020-07-25 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0003_auto_20200725_0256'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='document',
            field=models.FileField(null=True, upload_to='files'),
        ),
    ]
