import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryStartLoadingCategories } from './../../actions/category';
import { productStartLoadingProducts } from './../../actions/product';
import Img from '../../assets/img/daniels-new-collection-1.jpg';
import Img2 from '../../assets/img/daniels-new-collection-2.jpg';

export const ProductsScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // if(categories !== []){} 
    dispatch(categoryStartLoadingCategories());
    dispatch(productStartLoadingProducts());
  }, []);
  
  return (
      <div className='product__productsscreen-container'>
        <div>
        </div>
      </div>
  );
};
