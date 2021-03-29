import { i_auth_action as i_action } from '../intefaces/authInterface';
import { i_login } from '../intefaces/loginInterface';
import { fetchWithoutToken } from '../helpers/fetch';
import { decode } from 'jsonwebtoken';
import types from '../types';
import { delErrorMsg, setError } from './errors';
import { stopLoading } from './ui';
import { clearStudents } from './students';
import { clearPdf } from './pdf';
import { clearDriver } from './drivers';

interface respDecode {
    [key: string]: any;
}

export const startLogin = ( data:i_login ) => {
    return async ( callback:Function ) => {
        const resp = await fetchWithoutToken({url:'/admin',method:'POST',data});
        const respJson = await resp.json();

        
        if( respJson.token ){
            localStorage.setItem('token', respJson.token)
            const { id:uid } = decode(respJson.token) as respDecode;
            callback( login( uid ) );
            callback( delErrorMsg() );
            
        } else {
            callback( setError(respJson.message) );
        }

        callback( stopLoading() );
    }
}

export const login = ( uid:string ):i_action => {
    const { login:type } = types;

    return { 
        type,
        payload: { uid }
    }
}


export const startLogout = () =>  ( callback:Function ) => {
    callback( stopLoading() );
    callback( logout() );
    callback( clearStudents() );
    callback( clearPdf() );
    callback( clearDriver() )
}


export const logout = ():i_action => {
    const { logout:type } = types;
    localStorage.clear();

    return { type }
}


export const startChecking = () => {
    return (callback:Function) => {
        const token = localStorage.getItem('token');
        if( token ){
            const { id:uid } = decode(token) as respDecode;
            callback(login(uid));
        }else {
            callback(logout());
        }
        callback(finishCheking());
    }
}

export const finishCheking = ():i_action => {
    const { checking:type } = types;

    return { type }
}