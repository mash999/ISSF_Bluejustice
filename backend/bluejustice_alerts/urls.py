from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('fetch-all-records/', views.fetch_all_alerts),
    path('fetch-records-with-limit/<int:limit>', views.fetch_alerts_with_limit),
    path('fetch-record/<int:id>', views.fetch_alert_by_id),
    path('register-new-alert/', views.register_new_alerts),
    path('modify-alert/<int:id>', views.modify_alerts)
]
