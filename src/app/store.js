import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({
    reducer:rootReducer,
    // devTools: process.env.NODE_ENV !== ' production'

})

// console.log('Store:', store);

export default store;
