import React from 'react'
import {Link} from 'react-router-dom';

const getTitle= (note)=>{
  const title= note.body.split('\n')[0]
  if(title.length>40){
    return title.slice(0,40)
  }

  return title
}

const getTime=(note)=>{
  return new Date(note.updated).toLocaleDateString()
}

const getBody=(note)=>{
  const title= getTitle(note)
  let content= note.body.replaceAll('\n',' ')
  content= content.replaceAll(title,'')
  if(content.length>45){
    return content.slice(0,45)+'...'
  }
  else{
    return content
  }
}

const ListNotes = ({note}) => {
  return (
    <Link to={`notes/${note.id}`}>  
    <div className='notes-list-item'>  
    <h1>{getTitle(note)}</h1>
    <p><span>{getTime(note)}</span>{getBody(note)}</p>
    </div>
    </Link>
  )
}

export default ListNotes