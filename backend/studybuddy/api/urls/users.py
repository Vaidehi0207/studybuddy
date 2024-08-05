from django.urls import path
from studybuddy.api.views.users import HelloWorldView
urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
]
