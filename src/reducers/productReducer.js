import { types } from './../types/types';

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productLoadedProducts:
            return {
                ...state,
                products: action.payload
            }
    
        default:
            return state;
    }
};