import os, datetime
from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'main/main.html')

def subcatalog(request):
    path = request.path.lstrip("/main/")
    if ' (internal)' in path:
        path = path.rstrip(' (internal)')
    else:
        return render(request, 'main/main.html', {'internal': 'false'})

    folders = os.listdir("DistributionsRepository/media/" + path)

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + path + '/' + folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    i = 0
    while i < len(folders):
        folders[i] = path + '/' + folders[i]
        i += 1

    folders = dict(zip(folders, modification_time))
    response = JsonResponse(folders)

    return response

def load_main(request):
    folders = os.listdir("DistributionsRepository/media")

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    folders = dict(zip(folders, modification_time))
    response = JsonResponse(folders)

    return response