/*
recipe name string
thumbnail url string
prep time number
ingredients array of strings
directions array of strings
*/

let initialState = {
  recipes: [
    { recipeName: 'Apple Pie', thumbnailUrl: '', prepTime: 40, ingredients: ['apple', 'pie crust', 'whipped cream'], directions: ['bake pie']},
    { recipeName: 'Corn Bread', thumbnailUrl: '', prepTime: 35, ingredients: ['corn', 'flour', 'eggs'], directions: ['bake in the oven']},
  ],
  displayRecipes: [],
};

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch(type) {
  // Add recipe post from the form
  // case 'ADD_POST':

  //   return{ ...state, displayRecipes:payload};

  // get recipes we have stored
  case 'GET_POSTS':
    return { ...state, recipes: payload };
  

  default:
    return state;
  }
};

// export const addRecipe = (recipe) => {
//   return {
//     type: 'ADD_POST',
//     payload: recipe,
//   };
// };

export const getRecipes = (recipe) => {
  return{
    type: 'GET_POSTS',
    payload: recipe,

  };
};