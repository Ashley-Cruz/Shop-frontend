import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCounter } from './../../hooks/useCounter';

export const ProductScreen = () => {

    const location = useLocation();
    const productId = parseInt(location.pathname.split('/')[2])
    const actualProduct = useSelector(state => state.product.products.filter(item => item.id === productId))[0];

    const {counter, decrement, increment} = useCounter();

    const onClick = () => {
        console.log('click')
    }

    return (
        <div className='product__productcreen-container'>
            <div className='product__productcreen-div-img'>
                <img src={actualProduct?.image} />
            </div>
            <div className='product__productcreen-div-info' style={{backgroundColor: actualProduct?.category === 'electronics' ? '#A4ADB7' : actualProduct?.category === 'jewelery' ? '#F8E7C9' : actualProduct?.category === "men's clothing" ? '#96BDC6' : '#E8CCBF'}} >
                <p className='product__productcreen-p-category'>{actualProduct?.category.toUpperCase()}</p>
                <h4>{actualProduct?.title}</h4>
                <p className='product__productcreen-p-price'>${actualProduct?.price} USD</p>
                <p className='product__productcreen-p'>DESCRIPTION</p>
                <p className='product__productcreen-p-desc'>{actualProduct?.description.slice(0,1).toUpperCase()}{actualProduct?.description.slice(1)}.</p>
                <div className='product__productcreen-div-counter'>
                    <p className='product__productcreen-p'>QUANTITY</p>
                    <div>
                        <p onClick={decrement} className='product__productcreen-counter-btn'>-</p>
                        <p>{counter}</p>
                        <p onClick={increment} className='product__productcreen-counter-btn'>+</p>
                    </div>
                </div>
                <div className='product__productcreen-btn' onClick={() => onClick()}>ADD TO CART</div>
            </div>
        </div>
    )
};
