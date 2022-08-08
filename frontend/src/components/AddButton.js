import React from 'react'
import { Link } from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'

const AddButton = () => {
  return (
    <div>
        <Link to='/notes/new' className='floating-button'>
            <GrAdd size={30}/>
        </Link>
    </div>
  )
}

export default AddButton