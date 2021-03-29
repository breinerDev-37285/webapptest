import { fetchWithToken } from "../helpers/fetch";
import { i_driver, i_driver_action as i_action } from "../intefaces/driverInterface";
import types from "../types";
import { stopLoading } from "./ui";



export const startLoadDrivers = () => async ( callback:Function ) => {
    const resp = await fetchWithToken({url:'/conductor'});
    const respJson = await resp.json();
    const drivers = respJson.conductoresAll;

    callback( loadDrivers( drivers ));
    callback( stopLoading() );
}

export const loadDrivers = ( drivers:Array<i_driver>):i_action => {
    const { loadDrivers:type } = types;
    return {
        type,
        payload: {
            drivers
        }
    }
} 


export const setActiveDriver = ( driver:i_driver ):i_action => {
    const { setActiveDriver:type } = types;

    return {
        type,
        payload: {
            active: driver
        }
    }
}

export const activeDriverModal = ():i_action => {
    const { openModalDrivers:type } = types;
    return { type }
}

export const closeDriverModal = ():i_action => {
    const { clseModalDrivers:type } = types;
    return { type }
}

export const clearActiveDriver = ():i_action => {
    const { clearActiveDriver:type } = types;
    return { type }
}


export const clearDriver = ():i_action => {
    const { clearDrivers:type } = types;
    return { type }
}