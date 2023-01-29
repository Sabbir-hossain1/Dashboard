from django.shortcuts import render

# Create your views here.
def dashborad_view(request):
    return render(request,'frontend_part/v1.8.0/index.html')

def simple_view(request):
    return render(request,'dashboard/dash.html')
