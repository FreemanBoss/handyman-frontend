// import { useState } from "react";
import LoginForm from "../../Components/Auth/Login.auth";
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { performGoogleAuth } from '../../features/auth/authThunks';
import { toast} from 'react-toastify';


const LoginPage = () => {
    const dispatch = useDispatch()

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    dispatch(performGoogleAuth(token)); // Dispatch token to perform Google authentication
  };

  const handleGoogleFailure = () => {
    toast.error('Google authentication failed. Please try again.');
  };

  


  return (
      
    <div className="min-h-[90%] flex justify-center items-center mt-20">
      <div className="w-full max-w-screen-lg bg-gray-50 m-5 shadow-xl rounded-2xl flex justify-between items-center max-sm:flex-col max-sm:w-full">
        <div className="w-1/2 max-sm:w-full flex flex-col py-4 items-center gap-5">
          <p className="text-sm font-normal text-gray-500">
            Sign in to continue using Handyman
          </p>

           
          {/* Google OAuthProvider for Google Authentication */}
          <GoogleOAuthProvider  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              shape="rectangular"
              theme="filled_blue"
              size="large"
              text="signin_with"
            />
          </GoogleOAuthProvider>



          <div className="mt-4 w-4/5 flex items-center justify-between">
            <span className="border-b w-1/3 lg:w-1/3"></span>
            <p className="text-xs text-center text-gray-500 uppercase">or</p>
            <span className="border-b w-1/3 lg:w-1/3"></span>
          </div>
          <LoginForm />
        </div>
        <div className="w-1/2 max-sm:w-full h-[600px] max-sm:h-[400px] flex items-center self-end max-sm:self-center bg-gradient-to-t from-[#ffcc80] to-[#bca07d] rounded-2xl m-4 overflow-hidden">
          <img
            src='/images/Hero.jpg'
            alt="bike"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;