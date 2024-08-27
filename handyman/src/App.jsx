import React from 'react'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import LoginSignup from './Pages/Login-Signup/Login-Signup.jsx';
import Bookings from './Pages/Bookings/Bookings.jsx';

function App() {

  return(
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/get-started" element={<LoginSignup />}/>
        <Route path="/bookings" element={<Bookings />}/>
      </Routes>
      
      
    </Router>
  )
}

export default App;
