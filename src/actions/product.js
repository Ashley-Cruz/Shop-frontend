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

export const productStartLoadingProductsByCategory = () => {
    return async(dispatch, getSate) => {

        const {title} = getSate().category.activeCategory

        try {
            const resp = await fetchResponse(`products/category/${title}`);
            const body = await resp.json();

            console.log(body)
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const productActiveProduct = (product) => ({
    type: types.productActiveProduct,
    payload: product
})

const productsByCategoryLoaded = (products) => ({
    type: types.productLoadedProductsByCategory,
    payload: products
})