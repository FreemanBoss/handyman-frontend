import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';  // Ensure this path is correct

const rootReducer = combineReducers({
    auth: authReducer
});

// console.log('Root Reducer:', rootReducer);

export default rootReducer;
