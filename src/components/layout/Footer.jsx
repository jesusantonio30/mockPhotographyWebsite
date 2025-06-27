import React, { useEffect, useState } from 'react'
import { navItems } from '../../utils/NavArray'
import { arrangeArr } from '../../utils/Helpers/arrayHelpers'
import { NavLink } from 'react-router-dom'
import FlowerIcon from '../../assets/Icons/tessaMorgan.svg?react'
import FacebookIcon from '../../assets/Icons/facebook.svg?react'
import LinkedInIcon from '../../assets/Icons/linkedin.svg?react'
import XIcon from '../../assets/Icons/x.svg?react'
import YTIcon from '../../assets/Icons/youtube.svg?react'


const Footer = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const newNavItems = arrangeArr(navItems, item => typeof item === 'object');

  return (
    <footer className='footer'>
        <nav className='py-10'>
          <ul className='footer-nav-ul'>
            {
              width >= 1200 ? (
                navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item === 'home' || typeof item === 'object' ? '/' : item}>
                      {item}
                    </NavLink>
                  </li>
                ))
              ) : (
                newNavItems.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item === 'home' || typeof item === 'object' ? '/' : item}>
                      {item}
                    </NavLink>
                  </li>
                ))
              )
            }
          </ul>
        </nav>
        <section className='footer-contents'>

          <div className='footer-contents-stack'>
            <div className='w-[78px]'>
              <FlowerIcon />
            </div>
            <p className='footer-contents-stack-text'>
              Tessa Morgan is a freelance wedding photographer who specializes in event
              photography, weddings and portraits for couples and individuals. Capturing
              love, one moment at a time. Your timeless memories, expertly preserved.
            </p>
          </div>

          <div className='footer-contents-socials'>
              <FacebookIcon />
              <LinkedInIcon />
              <XIcon />
              <YTIcon />
          </div>

          <div className='footer-contents-copyright'>
            <p>
              Copyright. All Rights Reserved.
            </p>
          </div>

        </section>
    </footer>
  )
}

export default Footer
