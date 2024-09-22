import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';  
import craftsmanReducer from '../features/craftmen/craftmenSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    craftsman: craftsmanReducer,
});


export default rootReducer;
