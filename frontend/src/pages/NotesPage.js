import React,{useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom';
import {AiFillBackward} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const NotesPage = () => {

    const noteId= useParams().id;
    // const noteId=useParams(match);
    // console.log(noteId);
    const[note,setNote]=useState(null);
    const navigate= useNavigate();

    useEffect(()=>{
        getNote();
    },[])

    const getNote= async()=>{
        // to prevent getting of new note while creating new note
        if(noteId==='new') return
        const response=await fetch(`/api/notes/${noteId}/`)
        const data = await response.json()
        setNote(data)
    }

    const createNote= async()=>{
        // fetch('/api/notes/create/',{
            fetch('/api/notes/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const updateNote= async()=>{
        // fetch(`/api/notes/${noteId}/update/`,{
            fetch(`/api/notes/${noteId}/`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const deleteNote= async()=>{
        // fetch(`/api/notes/${noteId}/delete/`,{
            fetch(`/api/notes/${noteId}/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        navigate('/')
    }

    const handleSubmit=()=>{
        console.log(note);
        if(noteId !== 'new' && note.body ===''){
            deleteNote();
        }
        else if(noteId !== 'new'){
            updateNote();
        }
        else if(noteId === 'new' && note.body !== null){
            console.log('trigerred');
            createNote();
            console.log('created');
        }
        // updateNote();
        navigate('/');
        
    }

    const handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }
  return (
    <div className='note'>
        {/* <Link to={'/'}> */}
        <div className='note-header'>
            <AiFillBackward size={30} className='note-back-icon' onClick={handleSubmit}/>
            {noteId !== 'new' ? (<button onClick={deleteNote}>Delete</button>
            ) :(<button onClick={handleSubmit}>DONE</button>)}
            
        </div>
        
        {/* </Link> */}
    <textarea onChange={(e)=>{handleChange(e.target.value)}} value={note?.body}></textarea>
    {/* onchange to update the state continuously */}
    </div>
  )
}

export default NotesPage