import React from 'react';
import GoogleLogin from 'react-google-login';
import Logo from '../../assets/logo/daniels-logo.png';
import Background from '../../assets/img/background.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authStartLogin } from './../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const responseGoogleLogin = async({tokenId}) => {
        const data = {tokenId}
        dispatch(authStartLogin(tokenId));
    }

    return (
        <div className='auth__loginscreen-background'>
            <div className='auth__loginscreen-login-container'>
                <div>
                    <img src={Logo} alt="daniels' logo" />
                    <p>Log in to your account</p>
                    <GoogleLogin
                        clientId="48766205045-1un78dd81nkr93g66po0c3jmuesen9o9.apps.googleusercontent.com"
                        onSuccess={responseGoogleLogin}
                        onFailure={responseGoogleLogin}
                        cookiePolicy={'single_host_origin'}
                        theme='dark'
                        buttonText='Log in with Google'
                        className='auth__loginscreen-ggogle-btn'
                    />
                    <div className='auth__loginscreen-or'>
                        <div></div>
                        <p className='auth__loginscreen-p-or'>or</p>
                        <div></div>
                    </div>
                    <p>Don't have an account? <Link to="/signup" className='auth__loginscreen-link'>Sign Up</Link></p>
                </div>
                <div className='auth__loginscreen-info'>
                    <p>Created By Ashley Cruz</p>
                    <p>To know more about how the application was created, check the next link: </p>
                    <a href='https://github.com/Ashley-Cruz/Shop-frontend' target="_blank">https://github.com/Ashley-Cruz/Shop-frontend</a>
                </div>
            </div>
            <div className='auth__loginscreen-img-container'>
                <img src={Background} alt="daniels" />
            </div>
        </div>
    ) 
};

