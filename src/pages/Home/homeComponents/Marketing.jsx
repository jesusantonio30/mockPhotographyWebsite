import React from 'react'
import MarketingCouple from '../../../assets/Images/marketingCouple.jpg'
import Flower from '../../../assets/Icons/MarketingFlower.svg?react'

const Marketing = () => {
  return (
    <section className="marketing max-h-212.5 h-screen flex relative">
        <div className='flex-3/4'
            style={{
                backgroundImage: `url(${MarketingCouple})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}/>
        <div className="space flex-1/14" />
        <div className='absolute z-10 top-33.5 right-11.5 w-147 h-145.25 bg-white opacity-90 flex flex-col items-center justify-center'>
            <Flower className="w-9.25"/>
            <h4 className='font-vibes capitalize text-4xl py-4'>
                Creative, Passionate, Artistic.
            </h4>
            <p className='max-w-5/10'>
                I will ensure your wedding day memories are preserved in
                stunning, timeless photographs that you will cherish for 
                a lifetime.
            </p>
        </div>
    </section>
  )
}

export default Marketing
