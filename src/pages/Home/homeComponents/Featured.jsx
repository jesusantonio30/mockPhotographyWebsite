import React from 'react'
import Filler from '../../../components/ui/Filler'
import MarriedCouple from '../../../assets/Images/marriedCouple.webp'
import CelebratingCouple from '../../../assets/Images/celebratingMarriedCouple.webp'
import ButtonMain from '../../../components/ui/ButtonMain'

const Featured = () => {
  return (
    <section className="featured py-20 px-10 grid gap-10">
      <Filler smText={"Portfolio"} lgText={"Featured Story"} className={"flex flex-col items-center"}/>
      <div className="featured-content max-h-182.5 h-screen grid grid-cols-3 gap-6">
        <article className='featured-article place-content-end text-left grid gap-4 pb-10 px-6'>
          <h2 className='font-cormorantSc text-mushroom text-9xl text-left'>
            01
          </h2>
          <h3 className='font-vibes text-left'>
            Ricardo & Lisa
          </h3>
          <p className='text-left'>
            On a beautiful spring day, I had the pleasure of covering this gorgeous couple's wedding. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magn aliqua. 
          </p>
        </article>
        <div className="featured-imgs col-span-2 grid grid-cols-2 gap-6 place-items-end">
          <img src={MarriedCouple} alt="Married couple portrait" className='object-cover h-full'/>
          <img src={CelebratingCouple} alt="Married couple celebrating"/> 
        </div>
      </div>
      <ButtonMain text={"View Portfolio"} src={"portfolio"}/>
    </section>
  )
}

export default Featured
