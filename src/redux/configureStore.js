import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Staff } from './staff'
import { Department } from './department';
import { StaffSalary } from './staffSalary';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            staff : Staff,
            department : Department,
            staffSalary : StaffSalary
        }),
        applyMiddleware(thunk, logger)
       
    );

    return store;
}