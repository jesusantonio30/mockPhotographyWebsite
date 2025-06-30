import React from 'react';
import ButtonMain from '../../../components/ui/ButtonMain';

const Hero = () => {
  return (
    <div>
      <div className="hero-content-wrapper">
        <p className='font-vibes text-vanilla text-[3.5rem]'>
            Timeless Moments
        </p>
        <h1 className='font-medium'>
            Captured Through Artistic Wedding Photography
        </h1>
        <ButtonMain text="View Packages" src="services"/>
      </div>
    </div>
  )
}

export default Hero
