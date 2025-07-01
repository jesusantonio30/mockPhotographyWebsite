import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMain = ( {text, src} ) => {
  return (
    <Link to={src}>
        <button type="button" className='button'>
            {text}
        </button>
    </Link>
  )
}

export default ButtonMain
