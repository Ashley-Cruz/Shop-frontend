import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { productActiveProduct } from './../../actions/product';

export const ProductCard = ({product}) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    history.push(`/product/${product.id}`)
    dispatch(productActiveProduct(product));
  }

  return (
    <div className='product__productcard-container' onClick={() => onClick()}>
      <div className='product__productcard-img-container'>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p>{product.title}</p>
        <p>${product.price} USD</p>
      </div>
      <div className='product__productcard-heart-container'>
        <i className="far fa-heart"></i>
      </div>
    </div>
  );
};
