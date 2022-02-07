import { types } from './../types/types';

const initialState = {
    products: [],
    activeProduct: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productLoadedProducts:
            return {
                ...state,
                products: action.payload
            }

        case types.productActiveProduct:
            return {
                ...state,
                activeProduct: action.payload
            }
    
        default:
            return state;
    }
};