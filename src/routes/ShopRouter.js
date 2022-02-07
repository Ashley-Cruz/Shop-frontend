import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Navbar } from '../components/navigation/Navbar';
import { ProductsScreen } from './../components/product/ProductsScreen';
import { ProductScreen } from './../components/product/ProductScreen';

export const ShopRouter = () => {
    return (
        <div className='base__main-background'>
            <Navbar />
            <Switch>
                <Route exact path="/product/:productId" component={ProductScreen} />
                <Route exact path="" component={ProductsScreen} />

                <Redirect to="" />
            </Switch>
        </div>
    );
};
