import React, { useEffect, useState } from 'react'
import ListNotes from '../components/ListNotes';
import AddButton from '../components/AddButton';

const NotesList = () => {
    const[notes,setNotes]= useState([]);

    useEffect(()=>{
        getNotes()
    },[])

    const getNotes= async ()=>{
        const response= await fetch('/api/notes/')
        const data=await response.json()
        // console.log(data)
        setNotes(data)
    }
  return (
    <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListNotes key={index} note={note} />
                ))}
            </div>
            <AddButton />
        </div>
  )
}

export default NotesList

// cors errors occurs coz we are running appliations on two different ports
// thus issue while calling endpoints
// django is saying no to react call