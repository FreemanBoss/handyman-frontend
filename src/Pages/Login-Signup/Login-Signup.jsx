
import './Login-Signup.css';
import LoginSignupNavbar from '../../Components/Login-Signup-Navbar/Login-Signup-Navbar.jsx'

const LoginSignup = () => {

  return (
    <>
    <LoginSignupNavbar />
    
    <div className='body'>
    <div className='login-container'>
      
      <div className='header'>
        Login
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        
        <div className='input'>
          <input type='text' placeholder='Username'/>
        </div>

        <div className='input'>
          <input type='email' placeholder='Email'/>
        </div>

        <div className='input'>
          <input type='password' placeholder='Password'/>
        </div>
        
      </div>

      <div className='forgot-password'>
        Forgot Password?<span>Click Here!</span>
      </div>
      
      <div className='submit-container'>
        <button className='submit'>Login</button>
        <button className='submit'>SignUp</button>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default LoginSignup;