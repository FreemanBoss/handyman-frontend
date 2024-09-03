import { createSlice } from "@reduxjs/toolkit";

// Get `isAuthenticated` from localStorage and handle `null` safely
const isAuthenticatedFromStorage = localStorage.getItem('isAuthenticated');
// const isAuthenticated = isAuthenticatedFromStorage ? JSON.parse(isAuthenticatedFromStorage) : false;

const initialState = {
    user: null,
    isAuthenticated: Boolean(isAuthenticatedFromStorage) || false,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        registerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            // Save authentication state to localStorage
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('isAuthenticated');
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, registerSuccess, registerFailure } = authSlice.actions;

export default authSlice.reducer;
