from rest_framework.response import Response
from .serializers import NotesSerializer
from .models import Notes

# for restful apis
def createNote(request):
    data= request.data
    note= Notes.objects.create(body=data['body'])
    serializer= NotesSerializer(note)
    return Response(serializer.data)

def getNotesInfo(request):
    notes= Notes.objects.all().order_by('-updated')
    serializer= NotesSerializer(notes, many=True)
    # this is query set of python objs so we need to serialize this to convert to json format
    return Response(serializer.data)

def getNoteInfo(request,pk):
    note= Notes.objects.get(id=pk)
    serializer= NotesSerializer(note) 
    return Response(serializer.data)

def updateNote(request, pk):
    data= request.data #adv of rest framework
    note= Notes.objects.get(id=pk)
    serializer= NotesSerializer(instance=note, data=data)
    # passing instance of note and then new data into the note so gets updated and then we save 
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

def deleteNote(request,pk):
    note= Notes.objects.get(id=pk)
    note.delete()
    return Response('Note deleted')