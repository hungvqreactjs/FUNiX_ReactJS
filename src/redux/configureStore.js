import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, 
        initialState, 
    );
    console.log("store",store)
    return store;
    
}