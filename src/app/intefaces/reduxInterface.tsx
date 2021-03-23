import { i_error_state } from './errorInterface';
import { i_auth_state } from './authInterface';
import { i_ui_state } from './uiInterface';

export default interface i_redux {
    auth: i_auth_state,
    err: i_error_state,
    ui: i_ui_state
}