const axios = require('axios');
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
  console.log('recipeArray', state.recipes);

  switch (type) {


    // Add recipe post from the form
    case 'ADD_POST':

      // return{ ...state, recipes: [...state.recipes, payload]};
      return { ...state, recipes: [...state.recipes, payload] };


    // get recipes we have stored
    case 'GET_POSTS':
      return { ...state, recipes: payload };


    default:
      return state;
  }
};


export const addRecipe = (recipeName, prepTime, ingredients, directions) => {

  return {
    type: 'ADD_POST',
    payload: {
      recipeName,
      prepTime,
      ingredients,
      directions,
    },
  };
};

// export const getRecipes = (recipe) => {
//   return{
//     type: 'GET_POSTS',
//     payload: recipe,

//   };
// };
export const getRecipes = () => async (dispatch) => {

  const response = await axios.get('http://localhost:3009/api/recipe');

  console.log('response data', response.data.results);

  dispatch({
    type: 'GET_POSTS',
    payload: response.data.results,
  });

};

