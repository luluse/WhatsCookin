import search, {getSearchResults} from '../../store/search';


describe('action creators', () => {
  it('should get getSearchResults action', () => {
    const action = getSearchResults();
    expect(action.type).toBe('GET_RESULTS');
  });
});

// export const getSearchResults = (results) => {
//   console.log('RRRResults', results);
  

//   return {
//     type: 'GET_RESULTS',
//     payload: results,
//   };

// };

// case 'GET_RESULTS':

//   return{...state, results: payload};