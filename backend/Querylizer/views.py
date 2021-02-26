from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
# Create your views here.

# To turn off CSRF validation (not recommended in production)


@method_decorator(csrf_exempt)
def createTable(request):
    try:
        # data = request.body.decode('utf8')
        data = {
            "name": "querilizer API",
            "version": "1.0",
            "release": "alpha",
        }

        return JsonResponse(data, safe=False)
    except:
        return JsonResponse({"error": "not a valid data"}, safe=False)