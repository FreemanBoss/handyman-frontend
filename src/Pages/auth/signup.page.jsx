import SignUpForm from '../../Components/Auth/siginup.component.auth'
// import { useDispatch } from 'react-redux';
// import { performGoogleAuth } from '../../features/auth/authThunks';
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast} from 'react-toastify';

const SignUpPage = () => {
  // const dispatch = useDispatch()
   const [searchParams] = useSearchParams();


   useEffect(() => {
    const error = searchParams.get('error');
    if (error === 'google_auth_failed') {
      toast.error('Google authentication canceled. Please try again.');
    }
  }, [searchParams]);


  // const handleGoogleSignUp = async()=>{
  //   dispatch(performGoogleAuth());
  // }

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Credential Response:", credentialResponse);
    // const token = credentialResponse.credential;
    // dispatch(performGoogleAuth(token)); // Dispatch token to perform Google authentication
  };

  const handleGoogleFailure = (error) => {
    // toast.error('Google authentication failed. Please try again.');
    console.error("Google Login Error:", error); // Log the full error
  toast.error("Google authentication failed. Please try again.");
  };

  return (
      
    <div className="min-h-[90%] flex justify-center items-center mt-20">
      <div className="w-full max-w-screen-lg bg-gray-50 m-5 shadow-xl rounded-2xl flex justify-between items-center max-sm:flex-col max-sm:w-full">
        <div className="w-1/2 max-sm:w-full flex flex-col py-4 items-center gap-5">
          <p className="text-sm font-normal text-gray-500">
          Enter your details to create your account.
          </p>

           {/* Google OAuthProvider for Google Authentication */}
           <GoogleOAuthProvider  clientId="537851239903-1iqb57cnfi3fm6gnv6hln6dg3n4pg14l.apps.googleusercontent.com">
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
          <SignUpForm />
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

export default SignUpPage;