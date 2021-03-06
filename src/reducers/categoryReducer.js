import { types } from './../types/types';

const initialState = {
    categories: [],
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.categoryLoadedCategories:
            return {
                ...state,
                categories: action.payload
            }
    
        default:
            return state;
    }
};