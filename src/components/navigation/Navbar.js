import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/daniels-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryOption } from './CategoryOption';
import { categoryStartLoadingCategories } from './../../actions/category';
import { productStartLoadingProducts } from './../../actions/product';
import { useHistory, Link } from 'react-router-dom';

export const Navbar = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const user = useSelector(state => state.auth);

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
  const handleInputChange = ({target}) => {
    setSearch(target.value);
  }

  const onSubmit = () => {
    setSearch('')
    history.push(`/results/${search}`)
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
      <input type='text' name='search' value={search} onChange={handleInputChange} placeholder="Search products..." onKeyDown={onKeyDown} />
      <div className="navigation__navbar-icons">
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
        <div>
          <i className="fas fa-user"></i>
          <div className='navigation__navbar-options'>
              <p>Options</p>
              <span></span>
              {
                  user?.uid
                  ? <p className='navigation__navbar-link'>Sign out</p>
                  : <Link to='/auth/login' className='navigation__navbar-link'>Log in</Link>
              }
          </div>
        </div>
      </div>
    </div>
  );
};
