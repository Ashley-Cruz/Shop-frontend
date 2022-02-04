import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { ProductsScreen } from './../components/product/ProductsScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="" component={ProductsScreen} />
                </Switch>
            </div>
        </Router>
    );
};
