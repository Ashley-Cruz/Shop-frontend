import { combineReducers } from "redux";
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';

export const rootReducer =  combineReducers({
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
})