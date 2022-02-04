import { types } from './../types/types';
import { fetchResponse } from './../helpers/fetch';

export const productStartLoadingProducts = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchResponse('products');
            const body = await resp.json();

            if(body !== []){
                dispatch(productsLoaded(body));
            }
            
        } catch (error) {
            console.log('Error');
        }
    }
}

const productsLoaded = (products) => ({
    type: types.productLoadedProducts,
    payload: products
})