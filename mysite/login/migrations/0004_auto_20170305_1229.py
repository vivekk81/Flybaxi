# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-05 12:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_auto_20170209_0602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikes',
            name='bikeimage',
            field=models.ImageField(max_length=255, null=True, upload_to=b'/static/images'),
        ),
    ]
