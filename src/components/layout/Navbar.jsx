import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import { navItems } from '../../utils/NavArray';
import NavigationItems from '../ui/NavigationItems';
import useWindowWidth from '../../hooks/useWindowWidth';
import HamburgerComponent from './HamburgerComponent';
import OpenMenu from './OpenMenu';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const width = useWindowWidth();

    return (
    <>

        {width >= 1200 ? (
            <nav className='navbar'>
                <NavigationItems items={navItems} className={'flex-center'}/>
            </nav>
        ) : (
            <nav className='navbar'>
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
                <AnimatePresence mode='wait'>
                    {open && <OpenMenu toggled={open} toggle={setOpen} key="menu"/>}
                </AnimatePresence>
            </nav>
        )}
        
    </>
    )
}

export default Navbar