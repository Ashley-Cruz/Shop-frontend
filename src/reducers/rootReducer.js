import { combineReducers } from "redux";
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';

export const rootReducer =  combineReducers({
    category: categoryReducer,
    product: productReducer
})