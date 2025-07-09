import React from 'react'
import MarketingCouple from '../../../assets/Images/marketingCouple.jpg'
import Flower from '../../../assets/Icons/MarketingFlower.svg?react'

const Marketing = () => {
  return (
    <section className="marketing">
        <div className='desktop:flex-3/4 mobile:flex-1'
            style={{
                backgroundImage: `url(${MarketingCouple})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}/>
        <div className="marketing-space" />
        <div className='marketing-content'>
            <Flower className="w-9.25"/>
            <h3 className='marketing-font'>
                Creative, Passionate, Artistic.
            </h3>
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
