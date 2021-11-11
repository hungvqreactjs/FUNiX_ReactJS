import {createStore, combineReducers} from 'redux';
import { Staff } from './staff'
import { Department } from './department';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            staff : Staff,
            department : Department
        })
        
       
    );

    return store;
}