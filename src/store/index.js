import { createStore, combineReducers, applyMiddleware } from 'redux';
import lunchLineReducer from './lunchLine';
import searchReducer from './search';

import thunk from 'redux-thunk';

let reducers = combineReducers({ lunchLineReducer, searchReducer });

const store = () => {
  return createStore(reducers, (applyMiddleware(thunk)));
};

export default store();