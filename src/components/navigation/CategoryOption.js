import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryOption = ({category}) => {

    return (
        <Link to={`/${category}`} className='navigation__categoryoption-p'>{category}</Link>
    );
};
