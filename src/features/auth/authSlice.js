import { createSlice } from "@reduxjs/toolkit";
import { performLogin } from "./authThunks"; // Adjust path as needed

const isAuthenticatedFromStorage = localStorage.getItem('isAuthenticated');
const hasCompletedInitialSetupFromStorage = localStorage.getItem('hasCompletedInitialSetup');

const initialState = {
    user: null,
    isAuthenticated: Boolean(isAuthenticatedFromStorage) || false,
    loading: false,
    error: null,
    hasCompletedInitialSetup: Boolean(hasCompletedInitialSetupFromStorage) || false,
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
            state.hasCompletedInitialSetup = action.payload.hasCompletedInitialSetup || false;
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            localStorage.setItem('hasCompletedInitialSetup', JSON.stringify(action.payload.hasCompletedInitialSetup || false));
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.hasCompletedInitialSetup = false;
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('hasCompletedInitialSetup');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(performLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(performLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.hasCompletedInitialSetup = action.payload.hasCompletedInitialSetup || false;
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
                localStorage.setItem('hasCompletedInitialSetup', JSON.stringify(action.payload.hasCompletedInitialSetup || false));
            })
            .addCase(performLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            });
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, registerSuccess, registerFailure } = authSlice.actions;

export default authSlice.reducer;

