import { createStore, combineReducers, applyMiddleware } from 'redux';
import lunchLineReducer from './lunchLine';
import searchReducer from './search';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

import thunk from 'redux-thunk';

let reducers = combineReducers({ lunchLineReducer, searchReducer, commentReducer, userReducer });

const store = () => {
  return createStore(reducers, (applyMiddleware(thunk)));
};

export default store();