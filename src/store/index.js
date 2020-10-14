import { createStore, combineReducers, applyMiddleware } from 'redux';
import lunchLineReducer from './lunchLine';
import searchReducer from './search';
import userReducer from './userReducer.js';

import thunk from 'redux-thunk';

let reducers = combineReducers({ lunchLineReducer, searchReducer, userReducer });

const store = () => {
    return createStore(reducers, (applyMiddleware(thunk)));
};

export default store();
