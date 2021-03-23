import { i_fetch } from "../intefaces/fetchInterface";

const endPoint = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = ({ url,method,data }:i_fetch):Promise<any> => {
    if( method === 'GET'){
        return fetch(`${ endPoint }${ url }`)
    }else{
        return fetch(`${ endPoint }${ url }`, {
            method,
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify( data )
        })
    }
}