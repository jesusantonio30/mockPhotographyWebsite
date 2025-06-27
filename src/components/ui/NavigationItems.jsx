import React from 'react'
import { NavLink } from 'react-router-dom';

const NavigationItems = ({ items, className }) => {
  return (
    <ul className={className}>
        {items.map((item, index) => (
            <li key={index}>
                <NavLink to={item === 'home' || typeof item === 'object' ? '/' : item}>
                    {item}
                </NavLink>
            </li>
        ))}
    </ul>
  )
}

export default NavigationItems;