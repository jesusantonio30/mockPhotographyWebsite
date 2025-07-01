import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ButtonMain = ( {text, src, child} ) => {
  return (
    <Link to={src}>
        <motion.button variants={child} type="button" className='button'>
            {text}
        </motion.button>
    </Link>
  )
}

export default ButtonMain
