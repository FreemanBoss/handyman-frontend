
import './Nav.css';
import { Link } from 'react-scroll';


function Navbar () {
  return(
    <nav className='container'>
      <img className="logo" src="" alt="logo" />

        <ul>
          
          <li>
           <Link to= "hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          
          <li>
            <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>

          </li>

          <li>
            <Link to="reviews" spy={true} smooth={true} offset={50} duration={500}>Review</Link>
          </li>

          <li>
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
          </li>
          
          <li>
           <Link to="/get-started">
            <button className='btn'>Get Started</button>
          </Link>
            </li>
        </ul>
        
    
    </nav>  

  )
}

export default Navbar;