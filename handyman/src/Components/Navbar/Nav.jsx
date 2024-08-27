
import './Nav.css';
import { Link as ScrollLink } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom'
import logo from '../../images/handy_logo.png'
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar () {
  const [navcolor, setnavcolor] = useState(false);

  useEffect (() =>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 600 ? setnavcolor(true) : setnavcolor(false)
    })
    
  }, [])
  return(
    <nav className= {`container ${navcolor ? 'darknav' : ''}`}>
      <img className="logo" src={logo} alt="logo" />

        <ul>
          
          <li>
           <ScrollLink to= "hero" spy={true} smooth={true} offset={50} duration={500}>Home</ScrollLink> 
           
          </li>
          
          <li>
            <ScrollLink to="services" spy={true} smooth={true} offset={50} duration={500}>Services</ScrollLink> 
            
          </li>

          <li>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={50} duration={500}>Review</ScrollLink>
          </li>

          <li>
          <ScrollLink to="footer" spy={true} smooth={true} offset={50} duration={500}>About Us</ScrollLink>
          </li>
          
          <li>
           <RouterLink to="/get-started">
            <button className='btn'>Get Started</button>
          </RouterLink>
            </li>
        </ul>
        
    
    </nav>  

  )
}

export default Navbar;