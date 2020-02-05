import { combineReducers } from 'redux';
import { DataReducer } from './data/reducer';

export const reducers = combineReducers ({
    Data: DataReducer
    
})