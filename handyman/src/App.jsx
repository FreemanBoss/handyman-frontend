import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Nav';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';

function App() {

  return(
    <>
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
    </>
  )
}

export default App
