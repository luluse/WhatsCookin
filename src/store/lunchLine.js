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
  ],
  activePost: [],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch(type) {
  case 'ADD_POST':

    return{ ...state, activePost: payload};

    case 'GET_POSTS':
      return
  }

  default:
    return state;
  }
};

export const addRecipe = (active) => {
  return {
    type: 'ADD_POST',
    payload: active,
  };
};