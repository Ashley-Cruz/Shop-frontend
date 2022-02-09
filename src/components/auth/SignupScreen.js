import React from 'react';
import GoogleLogin from 'react-google-login';
import Logo from '../../assets/logo/daniels-logo.png';
import Background from '../../assets/img/background.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authStartSignup } from '../../actions/auth';

export const SignupScreen = () => {

    const dispatch = useDispatch();
    const responseGoogleSignup = async({tokenId}) => {
        const data = {tokenId}
        dispatch(authStartSignup(data))
    }

    return (
        <div className='auth__loginscreen-background'>
            <div className='auth__loginscreen-login-container'>
                <div>
                    <img src={Logo} alt="daniels' logo" />
                    <p>Create your account</p>
                    <GoogleLogin
                        clientId="48766205045-1un78dd81nkr93g66po0c3jmuesen9o9.apps.googleusercontent.com"
                        onSuccess={responseGoogleSignup}
                        onFailure={responseGoogleSignup}
                        cookiePolicy={'single_host_origin'}
                        theme='dark'
                        buttonText='Sign up with Google'
                        className='auth__loginscreen-ggogle-btn'
                    />
                    <div className='auth__loginscreen-or'>
                        <div></div>
                        <p className='auth__loginscreen-p-or'>or</p>
                        <div></div>
                    </div>
                    <p>Have an account? <Link to="/auth/login" className='auth__loginscreen-link'>Log in now</Link></p>
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
