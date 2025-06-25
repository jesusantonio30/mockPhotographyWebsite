import React from 'react'
import { NavLink } from 'react-router-dom';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import { navItems } from '../../utils/NavArray';
import HamburgerComponent from './HamburgerComponent';


const Navbar = () => {

  return (
    <>
        <nav className='p-6 mobile:hidden tablet:hidden desktop:block'>
            <ul className='flex justify-around'>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item === 'home' ? '/' : item}>
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className='p-6 desktop:hidden'>
            <ul className='flex items-center'>
                <li className='w-22'></li>
                <li className='ml-auto'>
                    <NavLink>
                        <TMLogo className='tm-logo'/>
                    </NavLink>
                </li>
                <li className='ml-auto pr-10'>
                    <HamburgerComponent />
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar