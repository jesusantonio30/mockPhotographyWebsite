import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, type: "spring", stiffness: 10}}

      className='main-container'>
        <Outlet />
      </motion.section>
      <Footer />
    </>
  )
}

export default AppLayout
