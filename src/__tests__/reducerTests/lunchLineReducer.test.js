
import lunchLine , {getRecipes} from '../../store/lunchLine';
import API from '../../constants/url.js';
import axios from 'axios';


describe('action creators', ()=>{
  it('should getRecipes thunk', ()=>{
    const thunk = getRecipes();
    expect(typeof(thunk)).toBe('function');
  });
});

describe('reducer', ()=>{
  it('Should get a recipe', ()=>{
    const response = axios.get(API.BASE + API.RECIPE);
    const action = {type: 'GET_POSTS', payload: response};
    const newState = lunchLine(undefined, action);
    console.log('NEWSTATETHING', newState.response);
    expect(newState.response).toBe(1);
  });

});

// export function getRecipes() {

//   return async function (dispatch) {

//     const response = await axios.get(API.BASE + API.RECIPE);
//     const response2 = await axios.get(API.BASE + API.RECIPEALL + '1');

// it gets response it dipatches get posts
//     dispatch({
//       type: 'GET_POSTS',
//       payload: response.data.reverse(),
//     });

// gets response 2 it dispatches my creations
//     dispatch({
//       type: 'MY_CREATIONS',
//       payload: response2.data,
//     });

//   };

// }