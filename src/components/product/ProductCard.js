import React from 'react';

export const ProductCard = ({product}) => {
  return (
      <div className='product__productcard-container'>
          <div className='product__productcard-img-container'>
            <img src={product.image} alt={product.title} />
          </div>
          <div>
              <p>{product.title}</p>
              <p>${product.price} USD</p>
              <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className='product__productcard-heart-container'>
            <i className="far fa-heart"></i>
          </div>
      </div>
  );
};
