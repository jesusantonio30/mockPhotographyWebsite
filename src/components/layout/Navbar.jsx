import React from 'react'
import { NavLink } from 'react-router-dom';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import Menu from '../../assets/Icons/menu.svg?react'


const Navbar = () => {
  return (
    <>
        <nav className='h-[95px] flex flex-col place-content-center top-0 mobile:hidden tablet:hidden desktop:block'>
            <ul className='flex place-content-around items-center'>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='services'>
                        Packages
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <TMLogo className='tm-logo'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='portfolio'>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='blog'>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        <nav className='h-[95px] flex flex-col place-content-center top-0 desktop:hidden'>
            <ul className='flex place-content-between mx-12.5 items-center'>
                <li className='mx-auto'>
                    <NavLink>
                        <TMLogo className='tm-logo'/>
                    </NavLink>
                </li>
                <li>
                    <button>
                        <Menu />
                    </button>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
