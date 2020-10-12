import { createStore, combineReducers } from 'redux';
import lunchLineReducer from './lunchLine';


let reducers = combineReducers({ lunchLineReducer });

const store = () => {
  return createStore(reducers);
};

export default store();