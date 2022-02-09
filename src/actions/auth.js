import { fetchSinToken } from '../helpers/fetch';
import { types } from './../types/types';

export const authStartLogin = (token) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchSinToken(`auth/login/${token}`);
            const body = await resp.json();
            
            if(body.ok){
                localStorage.setItem('token', body.data.token);
    
                const {uid, name} = body.data;
                dispatch(authLogin({
                    uid,
                    name
                }))
            }else {
                console.log(body.msg);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const authLogin = (user) => ({
    type: types.authLogin,
    payload: user
})

export const authStartSignup = (data) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchSinToken('auth/signup', data, 'POST');
            const body = await resp.json();
            
            if(body.ok){
                localStorage.setItem('token', body.data.token);
    
                const {uid, name} = body.data;
                dispatch(authSignup({
                    uid,
                    name
                }))
            }else {
                console.log(body.msg);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const authSignup = (user) => ({
    type: types.authSignup,
    payload: user
})