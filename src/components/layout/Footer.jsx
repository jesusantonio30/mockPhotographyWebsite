import React from 'react'
import { navItems } from '../../utils/NavArray'
import { NavLink } from 'react-router-dom'
import FlowerIcon from '../../assets/Icons/tessaMorgan.svg?react'
import FacebookIcon from '../../assets/Icons/facebook.svg?react'
import LinkedInIcon from '../../assets/Icons/linkedin.svg?react'
import XIcon from '../../assets/Icons/x.svg?react'
import YTIcon from '../../assets/Icons/youtube.svg?react'


const Footer = () => {
  return (
    <footer className='flex flex-col'>
        <nav className='py-10'>
          <ul className='flex justify-around'>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item === 'home' || typeof item === 'object' ? '/' : item}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <section className='flex flex-col items-center'>
          <div className='w-[78px]'>
            <FlowerIcon />
          </div>
          <p className='text-center'>
            Tessa Morgan is a freelance wedding photographer who specializes in event
            photography, weddings and portraits for couples and individuals. Capturing
            love, one moment at a time. Your timeless memories, expertly preserved.
          </p>
        </section>
        <section className='flex justify-center'>
            <FacebookIcon />
            <LinkedInIcon />
            <XIcon />
            <YTIcon />
        </section>
    </footer>
  )
}

export default Footer
