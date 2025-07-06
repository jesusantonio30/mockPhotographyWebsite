import React from 'react';
import ButtonMain from '../../../components/ui/ButtonMain';
import { motion } from 'framer-motion';
import TessaMorganImg from '../../../assets/Images/TessaMorgan.jpg';

const Hero = () => {

  const container = {
    unMount: {y: 15, opacity: 0},
    mount: {
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1, 
        ease: "easeIn", 
        staggerChildren: 0.5,
        delayChildren: 0.3,
      }
    },
  }

  const child = {
    unMount: {opacity: 0, y: 20},
    mount: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section className='hero'
      initial={{y: 20, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeIn"}}
      style={{
        backgroundImage: `url(${TessaMorganImg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
        
      <motion.div className="overlay flex-around"
        variants={container}
        initial="unMount"
        animate="mount">
          
        <div className="hero-content-wrapper">
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
        </div>
      </motion.div>

    </motion.section>
  )
}

export default Hero
