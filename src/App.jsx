import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import LoginPage from "./Pages/auth/login.page.jsx";
import Navbar from "./Components/Navbar/Navbar.component.jsx";
import SignUpPage from "./Pages/auth/signup.page.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
