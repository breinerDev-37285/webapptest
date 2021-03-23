import { createStore, combineReducers, compose,applyMiddleware } from 'redux';
import authReducer from '../reducers/authReducer';
import errorReducer from '../reducers/errorReducer';
import uiReducer from '../reducers/uiReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    err: errorReducer,
    ui: uiReducer
});

const Store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);

export default Store;