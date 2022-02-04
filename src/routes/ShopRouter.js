import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Navbar } from '../components/navigation/Navbar';
import { ProductsScreen } from './../components/product/ProductsScreen';

export const ShopRouter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="" component={ProductsScreen} />

                <Redirect to="" />
            </Switch>
        </>
    );
};
