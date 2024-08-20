import './Nav.css'


function Navbar () {
  return(
    <nav className='container'>
      <img className="logo" src="" alt="logo" />
      
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Review</li>
          <li>About Us</li>
          <li><button className='btn'>Get Started</button></li>
        </ul>
    </nav>  

  )
}

export default Navbar;