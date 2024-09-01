import {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure,
} from './authSlice';
import { login, logout } from '../../api/authAPI';


export const loginUser = (credentials) => 
    async (dispatch) => {
    dispatch(loginStart());
    try {
        const user = await login(credentials);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch(logoutStart());
    try {
        await logout();
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFailure(error.message));
    }
};