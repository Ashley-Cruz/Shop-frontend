import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ProductCard } from './../product/ProductCard';

export const CategoryScreen = () => {

    const location = useLocation();
    const categoryName = location.pathname.split('/')[1]
    const products = useSelector(state => state.product.products.filter(item => item.category === categoryName));

    return (
        <div className='category__categoryscreen-container'>
            <div className='category__categoryscreen-head'>
                <div className='category__categoryscreen-head-main-container' style={{backgroundColor: categoryName === 'electronics' ? '#A4ADB7' : categoryName === 'jewelery' ? '#F8E7C9' : categoryName === "men's clothing" ? '#96BDC6' : '#E8CCBF'}}>
                    <h4 style={{color: categoryName === 'electronics' ? '#8e98a5' : categoryName === 'jewelery' ? '#eed5ab' : categoryName === "men's clothing" ? '#79aeb9' : '#dbb7a6'}}>{categoryName.toUpperCase()}</h4>
                </div>
            </div>
            <div className='product__productsscreen-products'>
                <h3>PRODUCTS</h3>
                <p>- just with daniels -</p>
                {
                    products.map( (product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    ) 
};
