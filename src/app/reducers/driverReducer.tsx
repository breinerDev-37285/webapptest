import types from "../types";
import { i_driver_action as i_action, i_driver_state as i_state } from '../intefaces/driverInterface';


const init:i_state = { openModal:false }

const driverReducer = (state = init, action:i_action):i_state => {
    const { loadDrivers, setActiveDriver, clearDrivers,openModalDrivers,clseModalDrivers,clearActiveDriver } = types;
    
    switch( action.type ){
        case loadDrivers:

            state = {
                ...state,
                ...action.payload
            }
            break;
        case setActiveDriver:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case openModalDrivers:
            state = {
                ...state,
                openModal: true
            }
            break;
        case clseModalDrivers:
            state = {
                ...state,
                openModal: false
            }
            break;
        case clearActiveDriver:
            state = {
                ...state,
                active: undefined
            }
            break;
        case clearDrivers:
            state = init;
            break;
    }

    return state;
}


export default driverReducer;