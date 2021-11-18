import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import {InitialStaffForm} from './form';
import { Staff } from './staff';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            staff : Staff,
            ...createForms({
                staffFrom: InitialStaffForm
            })
        
        }),
        applyMiddleware(thunk, logger)
       
    );
    return store;
    
}
