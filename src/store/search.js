const axios = require('axios');

let intialState = {
  results: [],
};

export default (state = intialState, action) => {
  let { type, payload } = action;

  switch(type){

  case 'GET_RESULTS':

    return{...state, results: payload};

  default:
    return state;
  }

};

export const getSearchResults = (results) => {
  console.log('results', results);
  // const response = await axios.get('http://localhost:3009/api/searchByIngredients');

  // console.log('response data', response.data.results);  
  return {
    type: 'GET_RESULTS',
    payload: results.data.results,
  };

};