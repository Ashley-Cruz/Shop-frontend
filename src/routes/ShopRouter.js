import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Navbar } from '../components/navigation/Navbar';
import { ProductsScreen } from './../components/product/ProductsScreen';
import { ProductScreen } from './../components/product/ProductScreen';
import { CategoryScreen } from './../components/category/CategoryScreen';
import { SearchResultsScreen } from './../components/product/SearchResultsScreen';

export const ShopRouter = () => {
    return (
        <div className='base__main-background'>
            <Navbar />
            <Switch>
                <Route exact path="/results/:keyword" component={SearchResultsScreen} />
                <Route exact path="/:categoryName/:productId" component={ProductScreen} />
                <Route exact path="/:categoryName" component={CategoryScreen} />
                <Route exact path="" component={ProductsScreen} />

                <Redirect exact to="" />
            </Switch>
        </div>
    );
};
