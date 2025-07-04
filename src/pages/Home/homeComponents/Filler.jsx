import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';


const Filler = () => {

    const { container, child } = useOutletContext();

  return (
    <motion.section 
    variants={container} 
        initial="unMount"
        animate="mount"
    className="filler">
        <motion.h4 className='award'
            variants={child} >
            Award Winning
        </motion.h4>
        <motion.h2 className='experience'
            variants={child} >
            Experience the perfect blend of creativity and elegance in every frame.
        </motion.h2>
    </motion.section>
  )
}

export default Filler
