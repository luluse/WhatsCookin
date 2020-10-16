import API from '../constants/url.js';
import axios from 'axios';

/*
recipe name string
thumbnail url string
prep time number
ingredients array of strings
directions array of strings
*/

let initialState = {
  recipes: [
    { recipeName: 'Apple Pie', thumbnailUrl: '', prepTime: 40, ingredients: ['apple', 'pie crust', 'whipped cream'], directions: ['bake pie'] },
    { recipeName: 'Corn Bread', thumbnailUrl: '', prepTime: 35, ingredients: ['corn', 'flour', 'eggs'], directions: ['bake in the oven'] },
  ],
};


export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {


  // Add recipe post from the form
  case 'ADD_POST':

    // return{ ...state, recipes: [...state.recipes, payload]};
    return { ...state, recipes: [...state.recipes, payload] };


    // get recipes we have stored
  case 'GET_POSTS':
    return { ...state, recipes: payload };

  case 'MY_CREATIONS':
    return {...state, personalRecipes: payload};

  default:
    return state;
  }
};


export const addRecipe = (recipeName, prepTime, ingredients, directions) => {

  return {
    type: 'ADD_POST',
    payload: {
      recipeName,
      prepTime: parseInt(prepTime),
      ingredients,
      directions,
    },
  };

};

export function getRecipes() {

  return async function (dispatch) {

    const response = await axios.get(API.BASE + API.RECIPE);
    const response2 = await axios.get(API.BASE + API.RECIPEALL + '1');

    dispatch({
      type: 'GET_POSTS',
      payload: response.data.reverse(),
    });

    dispatch({
      type: 'MY_CREATIONS',
      payload: response2.data,
    });

  };

}

