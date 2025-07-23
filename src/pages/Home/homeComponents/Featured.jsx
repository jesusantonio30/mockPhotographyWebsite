import React from 'react'
import Filler from '../../../components/ui/Filler'
import MarriedCouple from '../../../assets/Images/marriedCouple.webp'
import CelebratingCouple from '../../../assets/Images/celebratingMarriedCouple.webp'

const Featured = () => {
  return (
    <section className="featured py-20 px-10">
      <Filler smText={"Portfolio"} lgText={"Featured Story"} className={"flex flex-col items-center"}/>
      <div className="featured-content">
        <article className='featured-article'>
          <h2>
            01
          </h2>
          <h4>
            Ricardo & Lisa
          </h4>
          <p>
            On a beautiful spring day, I had the pleasure of covering this gorgeous couple's wedding. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magn aliqua. 
          </p>
        </article>
        <div className="featured-imgs">
          <img src={MarriedCouple} alt="Married couple portrait" />
          <img src={CelebratingCouple} alt="Married couple celebrating" />
        </div>
      </div>
    </section>
  )
}

export default Featured
