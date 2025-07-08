import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';


const Filler = ( {smText, lgText, className} ) => {

    const { container, child } = useOutletContext();

  return (
    <motion.section 
    variants={container} 
        initial="unMount"
        animate="mount"
    className={className}>
        <motion.h4 className='award'
            variants={child} >
            {smText}
        </motion.h4>
        <motion.h2 className='experience'
            variants={child} >
            {lgText}
        </motion.h2>
    </motion.section>
  )
}

export default Filler
