from operator import mod
import os, datetime
from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'main/main.html')

def subcatalog(request):
    path = request.path.lstrip("/main/")
    if ' (internal)' in path:
        path = path[:-11:1]
    else:
        return render(request, 'main/main.html', {'internal': 'false'})

    folders = os.listdir("DistributionsRepository/media/" + path)

    data = {}
    data['current'] = {
        'path': path,
        'modification_time': datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + path).st_mtime).strftime('%d.%m.%Y %H:%M'),
        'size': folder_size("DistributionsRepository/media/" + path)
    }

    data['children'] = {}
    for folder in folders:
        data['children'][folder] = {
            'modification_time': (datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + path + '/' + folder).st_mtime).strftime('%d.%m.%Y %H:%M'))
        }

    response = JsonResponse(data)

    return response

def load_main(request):
    folders = os.listdir("DistributionsRepository/media")

    modification_time = []
    for folder in folders:
        modification_time.append(datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + folder).st_mtime).strftime('%d.%m.%Y %H:%M'))

    folders = dict(zip(folders, modification_time))
    response = JsonResponse(folders)

    return response

def folder_size(path='.'):
    total = 0
    for entry in os.scandir(path):
        if entry.is_file():
            total += entry.stat().st_size
        elif entry.is_dir():
            total += folder_size(entry.path)
    return total