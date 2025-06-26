import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import { navItems } from '../../utils/NavArray';
import HamburgerComponent from './HamburgerComponent';
import OpenMenu from './OpenMenu';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <nav className='bg-white opacity-85 p-6 mobile:hidden tablet:hidden desktop:block'>
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
        <nav className={' bg-white opacity-85 p-6 desktop:hidden'}>
            <ul className='flex items-center'>
                <li className='w-22'></li>
                <li className='ml-auto'>
                    <NavLink to="/">
                        <TMLogo className='tm-logo'/>
                    </NavLink>
                </li>
                <li className={'ml-auto pr-10'}>
                    <HamburgerComponent 
                        open={open}
                        setOpen={setOpen}
                    />
                </li>
            </ul>
            <AnimatePresence>
                {open && <OpenMenu toggled={open}/>}
            </AnimatePresence>
        </nav>
    </>
  )
}

export default Navbar