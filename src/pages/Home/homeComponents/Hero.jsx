import React from 'react';
import ButtonMain from '../../../components/ui/ButtonMain';
import { motion, easeIn } from 'framer-motion';

const Hero = () => {
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
    <section className='hero'>
      <div className="overlay flex-around">
        <motion.div 
        variants={container}
        initial="unMount"
        animate="mount"

        className="hero-content-wrapper">
          <motion.p 
          variants={child}
          className='hero-timeless'>
              Timeless Moments
          </motion.p>
          <motion.h1 
          variants={child}
          className='hero-header'>
              Captured Through Artistic Wedding Photography
          </motion.h1>
          <ButtonMain text="View Packages" src="services" child={child}/>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
