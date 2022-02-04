import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { ProductsScreen } from './../components/product/ProductsScreen';
import { Navbar } from './../components/navigation/Navbar';
import { ShopRouter } from './ShopRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <ShopRouter />
                </Switch>
            </div>
        </Router>
    );
};
