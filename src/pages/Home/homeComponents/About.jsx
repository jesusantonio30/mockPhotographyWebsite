import React from 'react';
import Quote from '../../../assets/Icons/QuoteDecor.svg';
import AboutImg from '../../../assets/Images/TessaAbout.jpg'
import ButtonMain from '../../../components/ui/ButtonMain';

const About = () => {
  return (
    <section className="about desktop:max-h-158.25 h-screen bg-green-700">
        <div></div>
        <article>
          <img src={AboutImg} alt="" className='max-w-140 bg-bottom'/>
          <h2>
            Hello, My Name is Tessa
          </h2>
          <p>
            I'm a passionate wedding photographer based in beautiful California. 
            With over a decade of experience, I have dedicated my career to 
            capturing the unique love stories of couples from all walks of life. 
            My journey in photography began in college, where I fell in love with 
            the art of storytelling through a lens. After earning my degree in 
            Fine Arts, I honed my skills working with some of the top 
            photographers in the industry.
          </p>
          <ButtonMain text={"Learn More"} src={"about"}/>
        </article>
    </section>
  )
}

export default About
