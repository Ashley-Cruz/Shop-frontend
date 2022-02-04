import { types } from './../types/types';
import {fetchResponse} from '../helpers/fetch';

export const categoryStartLoadingCategories = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchResponse('products/categories');
            const body = await resp.json();

            if(body !== []){
                dispatch(categoriesLoaded(body));
            }
            
        } catch (error) {
            console.log('Error');
        }
    }
}

const categoriesLoaded = (categories) => ({
    type: types.categoryLoadedCategories,
    payload: categories
})