from django.contrib import admin

# Register your models here.
# to use models inside admin panel we need to register them
from .models import Notes

admin.site.register(Notes)