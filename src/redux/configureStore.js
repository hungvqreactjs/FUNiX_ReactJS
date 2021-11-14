import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Staff } from './staff';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            staff : Staff,
        
        }),
        applyMiddleware(thunk, logger)
       
    );

    return store;
}