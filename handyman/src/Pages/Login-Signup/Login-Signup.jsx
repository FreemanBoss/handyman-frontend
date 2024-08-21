
import './Login-Signup.css';

const LoginSignup = () => {
  return (
    <div className='container'>
      
      <div className='header'>
      </div>

      <div className='inputs'>
        
        <div className='input'>
          <input type='text'/>
        </div>

        <div className='input'>
          <input type='text'/>
        </div>

        <div className='input'>
          <input type='password'/>
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

  )
}

export default LoginSignup;