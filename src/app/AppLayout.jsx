import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <section className='w-screen flex justify-center'>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default AppLayout
