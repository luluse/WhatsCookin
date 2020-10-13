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
  displayRecipes: [
    { recipeName: '', thumbnailUrl: '', prepTime: 0, ingredients: [], directions: []}],
  activeItem: {},
};

export default (state = initialState, action) => {
  let {type, payload} = action;
  

  switch(type) {
  

  // Add recipe post from the form
  case 'ADD_POST':
    return{ ...state, recipes: [...state.recipes, payload]};


  case 'UPDATE_ACTIVE_ITEM':
    return {...state, activeItem: payload};

  case 'UPDATE_NAME': {
    
    return {...state, recipes:  [...state.recipes, state.activeItem]};
  }

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

export const updateActiveItem = (payload) => {
  return{
    type: 'UPDATE_ACTIVE_ITEM',
    payload,
  };
};


export const updateRecipeName = (activeName) => {
  return{
    type: 'UPDATE_NAME',
    payload: activeName,
  };
};

export const getRecipes = (recipe) => {
  return{
    type: 'GET_POSTS',
    payload: recipe,

  };
};