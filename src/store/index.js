import { createStore, combineReducers, applyMiddleware } from 'redux';
import lunchLineReducer from './lunchLine';

import thunk from 'redux-thunk';

let reducers = combineReducers({ lunchLineReducer });

const store = () => {
  return createStore(reducers, (applyMiddleware(thunk)));
};

export default store();