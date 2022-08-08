from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .utils import deleteNote, getNotesInfo, updateNote, getNoteInfo, createNote
from .models import Notes
from .serializers import NotesSerializer

# Create your views here.
@api_view(['GET'])  #decorator
def getRoutes(request):
    return Response('backend')

@api_view(['GET','POST'])
def getNotes(request):
    if request.method== 'GET':
        return getNotesInfo(request)

    if request.method== 'POST':
        return createNote(request)

@api_view(['GET','PUT','DELETE'])
def getNote(request, pk):
    if request.method== 'GET':
        return getNoteInfo(request,pk)

    if request.method== 'PUT':
        return updateNote(request,pk)
    
    if request.method== 'DELETE':
        return deleteNote(request,pk)

# @api_view(['GET'])
# def getNotes(request):
#     if request.method== 'GET':
#         notes= Notes.objects.all().order_by('-updated')
#         serializer= NotesSerializer(notes, many=True)
#     # this is query set of python objs so we need to serialize this to convert to json format
#         return Response(serializer.data)

# @api_view(['GET'])
# def getNote(request, pk):
#     note= Notes.objects.get(id=pk)
#     serializer= NotesSerializer(note)
#     return Response(serializer.data)
# 
# @api_view(['POST'])
# def createNote(request):
#     data= request.data
#     note= Notes.objects.create(body=data['body'])
#     serializer= NotesSerializer(note)
#     return Response(serializer.data)

# @api_view(['PUT'])
# def updateNote(request, pk):
#     data= request.data #adv of rest framework
#     note= Notes.objects.get(id=pk)
#     serializer= NotesSerializer(instance=note, data=data)
#     # passing instance of note and then new data into the note so gets updated and then we save 
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteNote(request,pk):
#     note= Notes.objects.get(id=pk)
#     note.delete()
#     return Response('note deleted')