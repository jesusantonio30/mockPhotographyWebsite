import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import OpenMenu from './OpenMenu';

const HamburgerComponent = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <Hamburger 
          toggled={open}
          toggle={setOpen}
          color='#BBA085'
          size={32}
          rounded
        />
        {open && <OpenMenu toggle={setOpen} toggled={open}/>}
    </>
  )
}

export default HamburgerComponent
