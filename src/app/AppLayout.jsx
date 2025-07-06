import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const container = {
  unMount: {y: 15, opacity: 0},
  mount: {
    y: 0, 
    opacity: 1,
    transition: {
      duration: 1, 
      ease: "easeIn", 
      staggerChildren: 0.3,
      delayChildren: 0.1,
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

const AppLayout = () => {

  return (
    <>
      <Navbar />
      <section className='main-container'>
        <Outlet context={{container, child}} />
      </section>
      <Footer />
    </>
  )
}

export default AppLayout
