from django.db import models


class RegisterAlerts(models.Model):
    record_id = models.AutoField(primary_key=True)
    contributor_id = models.IntegerField(blank=True)
    title = models.TextField(blank=True)
    bluejustice_type = models.TextField(blank=True)
    ecosystem_type = models.TextField(blank=True)
    impact_type = models.TextField(blank=True)
    severity = models.TextField(blank=True)
    magnitude = models.TextField(blank=True)
    country = models.TextField(blank=True)
    location = models.TextField(blank=True)
    status = models.TextField(blank=True)
    categories = models.TextField(blank=True)
    description = models.TextField(blank=True)
    image_url = models.TextField(blank=True)

    class Meta:
        managed = False
        db_table = 'bluejustice_alerts_registeralerts'