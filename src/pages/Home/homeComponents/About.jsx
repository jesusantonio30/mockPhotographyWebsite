import React from 'react';
import AboutImg from '../../../assets/Images/TessaAbout.jpg';
import Quote from '../../../assets/Icons/QuoteDecor.svg?react';
import Underline from '../../../assets/Icons/UnderlineDecor.svg?react';
import ButtonMain from '../../../components/ui/ButtonMain';

const About = () => {
  return (
    <section className="about grid grid-cols-2 h-158.25">
      <div
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 65%',
          backgroundRepeat: 'no-repeat'
        }} />
      <article className='grid place-items-center p-10'>
        <Quote className="w-20.75"/>
        <h2>
          Hello, My Name is Tessa
        </h2>
        <p className='text-left leading-7'>
          I'm a passionate wedding photographer based in beautiful California. 
          With over a decade of experience, I have dedicated my career to 
          capturing the unique love stories of couples from all walks of life. 
          My journey in photography began in college, where I fell in love with 
          the art of storytelling through a lens. After earning my degree in 
          Fine Arts, I honed my skills working with some of the top 
          photographers in the industry.
        </p>
        <Underline className="w-67.5"/>
        <ButtonMain text={"Learn More"} src={"about"}/>
      </article>
    </section>
  )
}

export default About
