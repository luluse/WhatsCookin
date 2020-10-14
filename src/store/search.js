const axios = require('axios');

let intialState = {
  results: [],
};

export default (state = intialState, action) => {
  let { type, payload } = action;

  switch(type){

  case 'GET_RESULTS':

    return{...state, results: payload};

  
  case 'UPDATE_RESULTS':

    return{...state, results: payload};

  default:
    return state;
  }

};



export const getSearchResults = (results) => {
  console.log('RRRResults', results);
  

  return {
    type: 'GET_RESULTS',
    payload: results,
  };

};

// export const updateSearchResults = () => {
//   return{
//     type: 'UPDATE_RESULTS':
//     payload: 
//   }
// }