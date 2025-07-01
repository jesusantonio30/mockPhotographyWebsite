import React from 'react';
import ButtonMain from '../../../components/ui/ButtonMain';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="overlay flex-center">
        <div className="hero-content-wrapper">
          <p className='hero-timeless'>
              Timeless Moments
          </p>
          <h1 className='hero-header'>
              Captured Through Artistic Wedding Photography
          </h1>
          <ButtonMain text="View Packages" src="services"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
