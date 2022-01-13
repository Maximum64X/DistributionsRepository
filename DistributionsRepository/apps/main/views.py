import os, datetime
from django.shortcuts import render

def index(request):

    os.chdir("DistributionsRepository/media")
    folders = os.listdir()

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat(folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    os.chdir('../..')

    folders = dict(zip(folders, modification_time))

    return render(request, 'main/main.html', {"folders": folders})