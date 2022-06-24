from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate
from django.contrib.auth import login as user_login
from ticker_management.gadget import datagetter,schedulingdata
from django.http import HttpResponse
from django_celery_beat.models import PeriodicTask,CrontabSchedule
from datetime import datetime
from ticker_management.tasks import test_fun

@login_required
def index(request):
    return render(request, 'index.html')

@login_required
def createticker(request):

    data = {
            'pos_box':[
                'top-right',
                'top-left',
                'bottom-right',
                'bottom-left',
                'center',
                'fullscreen'
                ],
            
            'font_style':[
                'TimesNewRoman',
                'MyriadProFont',
                'Ubuntu',
                'Russian',
                'Chinese',
                'Japanese',
                'Arabic',
                'Turkish',
                'Spanish',
                'French',
                'Hindi'
                ],

            'font_size':[
                'x-large',
                'large',
                'normal',
                'small'
                ],

            'position':[
                'up',
                'down'
                ],

            'logo_position':[
                'left',
                'right'
                ],

            'speed':[
                'fast',
                'normal',
                'slow',
                'very-slow'
                ],
            
            'motion':[
                'left',
                'right'
                ],

            'location':[
                'small',
                'normal',
                'large'
                ],
                
            'emergency_ticker_list':[
                'Earthquake',
                'Fire',
                'Active Shooting',
                'General Evacuation',
                'Custom'
                ]
        }
    
    if request.method == 'POST':
        if (
            request.POST.get('static_ticker_enabler')=='' or 
            request.POST.get('primary_ticker_enabler')=='' or 
            request.POST.get('secondary_ticker_enabler')=='' or 
            request.POST.get('animation_ticker_enabler')=='' or 
            request.POST.get('emergency_ticker_enabler')==''
           ):
            return render(request, 'preview.html',datagetter(request))
        else:
            return render(request, 'createticker.html', data)
    else:
        return render(request, 'createticker.html', data)

@login_required
def active(request):
    return render(request, 'active.html') 

@login_required
def pending(request):
    return render(request, 'pending.html')   

@login_required
def history(request):
    return render(request, 'history.html') 

@login_required
def preview(request):
    return render(request, 'preview.html')
        
@login_required
def schedule(request):

    now = datetime.now() # current date and time

    year = now.strftime("%Y")

    month = now.strftime("%m")

    day = now.strftime("%d")

    hour = int(now.strftime("%H"))

    minute = int(now.strftime("%M"))+2

    if minute>=60:
        hour+=minute%60
        minute=minute/60

    schedule,created=CrontabSchedule.objects.get_or_create(month_of_year=month,day_of_month=day,hour=hour,minute=minute)
    task=PeriodicTask.objects.create(crontab=schedule,task='ticker_management.tasks.test_fun1',name='trying_to_make_same'+str(13))
    return HttpResponse('day:{},month:{},{}:{}'.format(day,month,hour,minute))

    # print(request.POST.get('delay'))
    # return render(request, 'schedule.html',schedulingdata())

def login(request):
    if request.method == "POST":
        uname = request.POST['uname']
        passwd = request.POST['passwd']
        user = authenticate(request,username=uname,password=passwd)
        if user is not None:
            user_login(request,user)
            return redirect(request.GET['next'])
        else:
            error = "Incorrect username or password...!"
            return render(request,'login.html',{'comment':error})
    return render(request, 'login.html')
