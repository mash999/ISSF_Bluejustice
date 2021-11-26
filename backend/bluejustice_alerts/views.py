import traceback
from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from bluejustice_alerts.models import RegisterAlerts
from bluejustice_alerts.serializers import RegisterAlertsSerializer




@api_view(['GET'])
def fetch_all_alerts(request):
    try:
        records_objects = RegisterAlerts.objects.all()
        all_records = list()
        for record in records_objects:
            all_records.append({
                'record_id': record.record_id,
                'contributor_id': record.contributor_id,
                'title': record.title,
                'bluejustice_type': record.bluejustice_type,
                'ecosystem_type': record.ecosystem_type,
                'impact_type': record.impact_type,
                'severity': record.severity,
                'magnitude': record.magnitude,
                'location': record.location,
                'country': record.country,
                'status': record.status,
                'categories': record.categories,
                'description': record.description,
                'image_url': record.image_url
            })

        data = {
            'records': all_records
        }
        return JsonResponse(data,status=status.HTTP_200_OK) 
    
    except RegisterAlerts.DoesNotExist:
        traceback.print_exc()   
        return JsonResponse({"message": "Sorry, Register Alerts record does not exist!!"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        traceback.print_exc()   
        return JsonResponse({'message': 'Sorry, we encountered an unexpected error. Please try again later!!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['GET'])
def fetch_alerts_with_limit(request, limit):
    try:
        records_objects = RegisterAlerts.objects.all().order_by('-record_id')[:limit]
        records = list()
        for record in records_objects:
            records.append({
                'record_id': record.record_id,
                'contributor_id': record.contributor_id,
                'title': record.title,
                'bluejustice_type': record.bluejustice_type,
                'ecosystem_type': record.ecosystem_type,
                'impact_type': record.impact_type,
                'severity': record.severity,
                'magnitude': record.magnitude,
                'location': record.location,
                'country': record.country,
                'status': record.status,
                'categories': record.categories,
                'description': record.description,
                'image_url': record.image_url
            })

        data = {
            'records': records
        }
        return JsonResponse(data,status=status.HTTP_200_OK) 
    
    except RegisterAlerts.DoesNotExist:
        traceback.print_exc()   
        return JsonResponse({"message": "Sorry, Register Alerts record does not exist!!"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        traceback.print_exc()   
        return JsonResponse({'message': 'Sorry, we encountered an unexpected error. Please try again later!!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['GET'])
def fetch_alert_by_id(request, id):
    try:
        record = RegisterAlerts.objects.get(record_id=id)
        record_obj = {
            'record_id': record.record_id,
            'contributor_id': record.contributor_id,
            'title': record.title,
            'bluejustice_type': record.bluejustice_type,
            'ecosystem_type': record.ecosystem_type,
            'impact_type': record.impact_type,
            'severity': record.severity,
            'magnitude': record.magnitude,
            'location': record.location,
            'country': record.country,
            'status': record.status,
            'categories': record.categories,
            'description': record.description,
            'image_url': record.image_url
        }

        data = {
            'record': record_obj
        }
        return JsonResponse(data,status=status.HTTP_200_OK) 
    
    except RegisterAlerts.DoesNotExist:
        traceback.print_exc()   
        return JsonResponse({"message": "Sorry, Register Alerts record does not exist!!"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        traceback.print_exc()   
        return JsonResponse({'message': 'Sorry, we encountered an unexpected error. Please try again later!!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['POST'])
@csrf_exempt
def register_new_alerts(request):
    try:
        payload = JSONParser().parse(request)
        serializer = RegisterAlertsSerializer(data=payload)
        if serializer.is_valid(): 
            serializer.save()
            return JsonResponse({"message": "Success"}, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=400)
    
    except RegisterAlerts.DoesNotExist:
        traceback.print_exc()   
        return JsonResponse({"message": "Sorry, Register Alerts record does not exist!!"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        traceback.print_exc()   
        return JsonResponse({'message': 'Sorry, we encountered an unexpected error. Please try again later!!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




@api_view(['PUT'])
@csrf_exempt
def modify_alerts(request, id):
    try:
        record = RegisterAlerts.objects.get(record_id = id)
        payload = JSONParser().parse(request)
        serializer = RegisterAlertsSerializer(data=payload)
        if serializer.is_valid(): 
            serializer.save()
            return JsonResponse({"message": "Success"}, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=400)
    
    except RegisterAlerts.DoesNotExist:
        traceback.print_exc()   
        return JsonResponse({"message": "Sorry, Register Alerts record does not exist!!"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        traceback.print_exc()   
        return JsonResponse({'message': 'Sorry, we encountered an unexpected error. Please try again later!!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




def delete_alerts(requests):
    return