import React from 'react';
import { motion, easeIn } from 'framer-motion';

const Filler = () => {
    const container = {
        unMount: {y: 20, opacity: 0},
        mount: {
            y: 0, 
            opacity: 1,
            transition: {
                duration: 2, 
                ease: easeIn, 
                staggerChildren: 0.8,
            }
        },
    }

    const child = {
        unMount: {opacity: 0},
        mount: {opacity: 1}
    }
  return (
    <motion.section 
        variants={container}
        initial="unMount"
        animate="mount"

        className="filler">
        <motion.h4 
            variants={child}
            className='award'>
            Award Winning
        </motion.h4>
        <motion.h2 
            variants={child}
            className='experience'>
            Experience the perfect blend of creativity and elegance in every frame.
        </motion.h2>
    </motion.section>
  )
}

export default Filler
