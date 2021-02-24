from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
# Create your views here.

# To turn off CSRF validation (not recommended in production)
@method_decorator(csrf_exempt)
def createTable(request):
    data = request.body.decode('utf8')
    data = json.loads(data)
    try:
        
        return JsonResponse({"created": data}, safe=False)
    except:
        return JsonResponse({"error": "not a valid data"}, safe=False)


