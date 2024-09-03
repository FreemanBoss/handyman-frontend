import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import LoginPage from "./Pages/auth/login.page.jsx";
import Navbar from "./Components/Navbar/Navbar.component.jsx";
import SignUpPage from "./Pages/auth/signup.page.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useEffect } from "react";
import Aos from "aos";
import './tailwind-output.css';
import ContactForm from "./Pages/ContactForm.jsx";





function App() {

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 100,
      // once: true
    })
  })

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/contactform" element={<ContactForm />}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
