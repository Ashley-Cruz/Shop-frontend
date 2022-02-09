import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { SignupScreen } from './../components/auth/SignupScreen';
import { LoginScreen } from './../components/auth/LoginScreen';

export const AuthRouter = () => {
    return (
       <div>
           <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/signup" component={SignupScreen} />

                <Redirect to="/auth/login" />
           </Switch>
       </div> 
    )
}
