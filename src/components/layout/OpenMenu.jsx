import React from 'react'
import { Twirl as Hamburger } from 'hamburger-react';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import { NavLink } from 'react-router-dom';
import { navItems } from '../../utils/NavArray';

const OpenMenu = ({ toggled, toggle }) => {

  return (
    <nav className='bg-[#F2F2F2] opacity-85 absolute top-0 left-0 w-screen h-screen tablet:p-6 mobile:p-3'>
      <div className='relative flex justify-center items-center tablet:mt-7.5 mobile:mt-3'>
        <NavLink to='/'>
          <TMLogo className='tm-logo'/>
        </NavLink>
        <div className='absolute right-5'>
          <Hamburger 
            toggled={toggled}
            toggle={toggle}
            color='#BBA085'
            size={32}
            rounded
          />
        </div>
      </div>
      <aside className='flex justify-center items-center h-9/10'>
        <ul className='flex flex-col items-center'>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item === 'home' ? '/' : item} className='leading-15'>
                {typeof item === 'string' ? item : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  )
}

export default OpenMenu