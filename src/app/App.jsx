import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './AppLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

import Portfolio from '../pages/Portfolio/Portfolio';
import Gallery from '../pages/Portfolio/Gallery';

import Blog from '../pages/Blog/Blog';
import Article from '../pages/Blog/Article';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AppLayout /> }>
          <Route index element={ <Home /> }/>
          <Route path='about' element={ <About /> }/>
          <Route path='services' element={ <Services /> }/>
          <Route path='portfolio' element={ <Portfolio /> }/>
          <Route path='portfolio/:galleryName' element={ <Gallery /> }/>
          <Route path='contact' element={ <Contact /> }/>
          <Route path='blog' element={ <Blog /> }/>
          <Route path='blog/:articleName' element={ <Article /> }/>
          <Route path='*' element={ <PageNotFound /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
