import os, datetime
from django.shortcuts import render
from django.http import JsonResponse


def index(request):

    os.chdir("DistributionsRepository/media")
    folders = os.listdir()

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat(folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    os.chdir('../..')

    folders = dict(zip(folders, modification_time))

    return render(request, 'main/main.html', {"folders": folders})

def subcatalog(request):

    path = request.path.lstrip("/main/")

    os.chdir("DistributionsRepository/media/" + path)
    folders = os.listdir()

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat(folder).st_mtime).strftime('%d.%m.%Y %H:%M'))
        folder = path + '/' + folder

    os.chdir('../' * (path.count('/') + 3))

    i = 0
    while i < len(folders):
        folders[i] = path + '/' + folders[i]
        i += 1

    folders = dict(zip(folders, modification_time))

    response = JsonResponse(folders)

    return response

def load_main(request):
    os.chdir("DistributionsRepository/media")
    folders = os.listdir()

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat(folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    os.chdir('../..')

    folders = dict(zip(folders, modification_time))

    response = JsonResponse(folders)
    return response