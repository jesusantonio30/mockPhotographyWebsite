import React from 'react';
import Hero from './homeComponents/Hero';
import Filler from '../../components/ui/Filler';
import About from './homeComponents/About';
import Services from './homeComponents/Services';
import Marketing from './homeComponents/Marketing';

const Home = () => {
  return (
    <>
      <Hero />
      <Filler className={"filler"} smText={"Award Winning"} lgText={"Experience the perfect blend of creativity and elegance in every frame."}/>
      <About />
      <Services />
      <Marketing />
    </>
  )
}

export default Home
