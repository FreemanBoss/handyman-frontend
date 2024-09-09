import { register, login, logout as apiLogout, googleAuth } from '../../api/authAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerFailure, registerSuccess,  logout } from '../auth/authSlice';

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

export const performLogin = createAsyncThunk(
  'auth/performLogin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      return response.data; // Return the user object from response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const performLogout = () => async (dispatch) => {
        try {

        await apiLogout();
        dispatch(logout()); // Make sure this is correctly imported
         } 
         catch (error) {
            console.log(error)
      }
};

export const performGoogleAuth = () => async (dispatch) => {
  try {
    await googleAuth();
  } catch (error) {
    dispatch(registerFailure(error.message));
    return Promise.reject(error);
  }
};