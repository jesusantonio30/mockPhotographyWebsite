import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMain = ( {text, src} ) => {
  return (
    <Link to={src}>
        <button type="button" className='tablet:w-35.5 h-15 mobile:w-37.5 bg-sandrift text-xl text-white'>
            {text}
        </button>
    </Link>
  )
}

export default ButtonMain
