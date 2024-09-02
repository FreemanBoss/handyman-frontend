import { register, login, logout as apiLogout } from '../../api/authAPI';
import { registerFailure, registerSuccess, loginSuccess, loginFailure, logout } from '../auth/authSlice';


export const performRegister = (credentials) => async (dispatch) => {
    try {
        const user = await register(credentials);
        dispatch(registerSuccess(user));
        return Promise.resolve(user);
        // Redirect or notify user to log in
    } catch (error) {
        dispatch(registerFailure(error.message));
        return Promise.reject(error);
    }
};

export const performLogin = (credentials) => async (dispatch) => {
    try {
        const user = await login(credentials);
        dispatch(loginSuccess(user));
        return Promise.resolve(user);
    } catch (error) {
        dispatch(loginFailure(error.message));
        return Promise.reject(error);
    }
};

export const performLogout = () => async (dispatch) => {
        try {

        await apiLogout();
        dispatch(logout()); // Make sure this is correctly imported
         } 
         catch (error) {
            console.log(error)
      }
};
