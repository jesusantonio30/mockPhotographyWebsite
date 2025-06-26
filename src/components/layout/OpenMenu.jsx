import React from 'react'
import { Twirl as Hamburger } from 'hamburger-react';
import TMLogo from '../../assets/Icons/TM-logo.svg?react'
import { NavLink } from 'react-router-dom';
import { navItems } from '../../utils/NavArray';
import { motion } from 'framer-motion';


const menuVariants = {
  close: {
    scaleY: 0,
    transition: { duration: 1 }
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 1
    }
  }
};

const OpenMenu = ({ toggled }) => {

  return (
    <motion.aside
      variants={menuVariants}
      initial="close"
      animate={toggled ? "open" : "close"}
      exit="close"

      className='flex justify-center items-center bg-[#F2F2F2] absolute w-full h-screen left-0 tablet:p-6 mobile:p-3 origin-top overflow-hidden'>
      <ul className='flex flex-col items-center'>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item === 'home' ? '/' : item} className='leading-15'>
              {typeof item === 'string' ? item : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.aside>
  )
}

export default OpenMenu