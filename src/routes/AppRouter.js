import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { ShopRouter } from './ShopRouter';
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignupScreen } from './../components/auth/SignupScreen';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { useSelector } from 'react-redux';

export const AppRouter = () => {

    const {uid} = useSelector(state => state.auth);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={!!uid} />  
                    <ShopRouter />
                </Switch>
            </div>
        </Router>
    );
};
