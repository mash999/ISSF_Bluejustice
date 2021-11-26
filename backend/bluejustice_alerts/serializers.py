from bluejustice_alerts.models import RegisterAlerts
from rest_framework import serializers

class RegisterAlertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterAlerts
        fields = '__all__'