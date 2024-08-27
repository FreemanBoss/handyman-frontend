import './Services.css'
import cleaning from '../../images/cleaner_2.jpg';
import furniture from '../../images/furniture_assembly.jpg';
import plumbing from '../../images/plumber_2.jpg';
import cleaning_icon from '../../images/cleaning_icon.png';
import furniture_icon from '../../images/furniture_icon.png';
import plumbing_icon from '../../images/plubing_icon.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='services'>

      
        <div className='service'>
          <img src={cleaning} alt='cleaning'/>

          <div className="caption">
            <img src={cleaning_icon} alt=''/>
            <p>Expert Cleaning Services</p>
            <Link to="/bookings"><button className='btn'>Book Now</button></Link>
          </div>

        </div>
      

      
      <div className='service'>
      <img src={furniture} alt='furniture_assembly'/>
      <div className="caption">
        <img src={furniture_icon} alt='furniture icon'/>
        <p>Professional Furniture Setup</p>
        <Link to="/bookings"><button className='btn'>Book Now</button></Link>
      </div>
        
      </div>
      

      
      <div className='service'>
      <img src={plumbing} alt='plumbing'/>
      <div className="caption">
        <img src={plumbing_icon} alt='plumbing icon'/>
        <p>Reliable plumbing solutions.</p>
        <Link to="/bookings"><button className='btn'>Book Now</button></Link>
      </div>
      
      </div>
      
    </div>
  )
}
export default Services;