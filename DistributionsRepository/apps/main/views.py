import os, datetime, mimetypes
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse


def index(request):
    return render(request, 'main/main.html')

def load_main(request):
    folders = os.listdir("DistributionsRepository/media")

    data = {}
    for folder in folders:
        data[folder] = datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + folder).st_mtime).strftime('%d.%m.%Y %H:%M')

    response = JsonResponse(data)

    return response

def get_data(request):
    return render(request, 'main/main.html', {'internal': 'false'})

def get_data_internal(request):
    path = request.path.lstrip("/main/")
    path = path[:-10:1]

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
            'modification_time': datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + path + '/' + folder).st_mtime).strftime('%d.%m.%Y %H:%M')
        }

    response = JsonResponse(data)

    return response

def get_data_file_internal(request):
    path = request.path.lstrip("/main/")
    path = path[:-16:1]

    data = {}
    data['modification_time'] = datetime.datetime.fromtimestamp(os.stat("DistributionsRepository/media/" + path).st_mtime).strftime('%d.%m.%Y %H:%M')
    data['size'] = os.stat("DistributionsRepository/media/" + path).st_size
    
    response = JsonResponse(data)

    return response

def get_file(request):
    path = request.path.lstrip("/main/")
    path = path[:-9:1]

    with open("DistributionsRepository/media/" + path, 'r') as file:
        response = HttpResponse(file.read())

    response['Content-Type'] = mimetypes.guess_type("DistributionsRepository/media/" + path)
    response['Content-Disposition'] = 'attachment; filename=' + path.split('/').pop()

    return response

def folder_size(path='.'):
    total = 0
    for entry in os.scandir(path):
        if entry.is_file():
            total += entry.stat().st_size
        elif entry.is_dir():
            total += folder_size(entry.path)
    return total