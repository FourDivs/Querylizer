from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .ExtraFunctions.helperFunctions import CreateTableQuery_Function
# Create your views here.

# To turn off CSRF validation (not recommended in production)


@method_decorator(csrf_exempt)
def createTable(request):

    if request.method == 'POST':
        newdata = json.loads(request.body)
        data = CreateTableQuery_Function(newdata)
        print("hello ", data)
        return JsonResponse(data, safe=False)
    else:
        print("Error")
        return JsonResponse({"error": "Invalid Request Type, recieved GET instead of POST"}, safe=False)
