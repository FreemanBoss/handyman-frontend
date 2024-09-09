import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import LoginPage from "./Pages/auth/login.page.jsx";
import Navbar from "./Components/Navbar/Navbar.component.jsx";
import SignUpPage from "./Pages/auth/signup.page.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/dashboard.jsx";
import useTokenRefresh from './hooks/useTokenRefresh.js';
import Form from './Components/selectFrom.jsx'


function App() {
  useTokenRefresh()
  return (
    <Router>
      <Navbar />
      <ToastContainer />
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        {/* <Route path="/userType" element={<Form/>} />       */}
        {/* This is how you should implement the ProtectedRoute */}

         <Route 
          path="/userType" 
          element={
            <ProtectedRoute>
              <Form/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
