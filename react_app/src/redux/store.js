import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies'

export default configureStore({
    reducer: {
        companies: companiesReducer
    }
});