import './Login-Signup-Navbar.css';
import left_arrow from '../../images/left.png'
import HomePage from '../../Pages/Home';
import {Link} from 'react-router-dom'

const LoginSignupNavbar = () => {
    return(
        <nav className='container login-nav'>
            
            <Link to='/'>
            <img className='logo_2' src={left_arrow} alt='left-arrow'/>
            </Link>
            

            
        </nav>
    )
}

export default LoginSignupNavbar;