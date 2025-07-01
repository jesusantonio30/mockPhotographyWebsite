import React, { useEffect, useRef } from 'react'
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

const OpenMenu = ({ toggled, toggle }) => {

  const menuRef = useRef(null);

  useEffect(() => {
    if (toggled && menuRef.current) {
      menuRef.current.focus();
    }
  }, [toggled])

  return (
    <motion.aside
      ref={menuRef}
      tabIndex={-1}

      role='dialog'
      aria-modal='true'
      aria-label='Main Navigation'

      variants={menuVariants}
      initial="close"
      animate={toggled ? "open" : "close"}
      exit="close"

      className='navbar-openMenu-aside flex-center'>
      <ul className='text-center'>
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