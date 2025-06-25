import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

const HamburgerComponent = ({ open, setOpen }) => {

  return (
    <>
        <Hamburger 
          toggled={open}
          toggle={setOpen}
          color='#BBA085'
          size={32}
          rounded
        />
    </>
  )
}

export default HamburgerComponent
