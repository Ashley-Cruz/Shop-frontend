import React, { useEffect } from 'react';
import Logo from '../../assets/logo/daniels-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryOption } from './CategoryOption';
import { categoryStartLoadingCategories } from './../../actions/category';
import { productStartLoadingProducts } from './../../actions/product';
import { useHistory } from 'react-router-dom';

export const Navbar = () => {

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(categoryStartLoadingCategories());
    dispatch(productStartLoadingProducts());
  }, []);
  

  const {categories} = useSelector(state => state.category);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  }

  const onSubmit = () => {
    console.log('Enter');
  }

  return (
    <div className="navigation__navbar-container">
      <div>
        <img src={Logo} alt='daniels logo' onClick={() => history.push('')} />
      </div>
      {
        categories.map((category, i) => (
          <CategoryOption key={i} category={category} />
        ))
      }
      <input type='text' placeholder="Busca un producto" onKeyDown={onKeyDown} />
      <div className="navigation__navbar-icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};
