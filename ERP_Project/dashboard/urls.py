from django.urls import path
from . import views

urlpatterns = [
    path("dashboard/",views.dashborad_view),
    path("simple/",views.simple_view)
]
