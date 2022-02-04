import React from 'react';
import Logo from '../../assets/logo/daniels-logo.png';
import { useSelector } from 'react-redux';
import { CategoryOption } from './CategoryOption';

export const Navbar = () => {

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
        <img src={Logo} alt='daniels logo' />
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
