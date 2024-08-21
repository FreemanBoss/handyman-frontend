import React from 'react'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home.jsx';
import LoginSignup from './Pages/Login-Signup/Login-Signup.jsx';

function App() {

  return(
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/get-started" element={<LoginSignup />}/>
      </Routes>
      
      
    </Router>
  )
}

export default App;
