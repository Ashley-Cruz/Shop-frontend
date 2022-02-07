import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
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
