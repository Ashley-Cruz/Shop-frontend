import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ProductCard } from './ProductCard';

export const SearchResultsScreen = () => {

    const location = useLocation();
    const keyword = location.pathname.split('/')[2].toUpperCase()
    const products = useSelector(state => state.product.products.filter(product => product.title.toUpperCase().includes(keyword)));

    return (
        <div className='product__searchresultscreen-container'>
            <div className='product__productsscreen-products'>
                <h3>SEARCH RESULT</h3>
                <p>- just with daniels -</p>
                <div className='product__searchresultscreen-keyword-container'>
                    <p>{keyword}</p>
                </div>

                {
                    products.length > 0
                    ? products.map( (product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
                    : <p>We didn't find results for your search</p>
                }
            </div>
        </div>
    )
};
