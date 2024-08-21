
import './Nav.css';
import { Link as ScrollLink } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom'

function Navbar () {
  return(
    <nav className='container'>
      <img className="logo" src="" alt="logo" />

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