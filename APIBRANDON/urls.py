"""APIBRANDON URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views
from django.contrib.auth import views as auth_views
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login_view, name='login_view'),
    path('registro/', views.registro, name='registro'),
    path('index/', views.index, name='index'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login_view'), name='logout'),
     # ...otras rutas de URL...
    path('reset-password/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('reset-password/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset-password/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset-password/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('logout_view/', views.logout_view, name='logout_view'),
    path('Perfil1/', persona1.as_view(), name='persona1'),
    path('Perfil2/', persona2.as_view(), name='persona2'),
    path('Perfil3/', persona3.as_view(), name='persona3'),
    path('Perfil4/', persona4.as_view(), name='persona4')
]
