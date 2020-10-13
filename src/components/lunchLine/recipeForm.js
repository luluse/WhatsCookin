import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { addRecipe, updateRecipeName, updateActiveItem } from '../../store/lunchLine.js';





function recipeForm ({ addRecipe, displayRecipes, recipes, updateRecipeName, updateActiveItem}) {
  const [post, setPost] = useState([{}]);
  
  console.log('display reicpes', displayRecipes)
  console.log('recipe name', recipes.recipeName)
  return (
    <div>
      <h2>Add a recipe!</h2> 
      <form onSubmit={e => {
        e.preventDefault();
        addRecipe(recipes.recipeName);
        setPost('');
      }}>
        {/* {console.log('display reicpes', displayRecipes)}; */}
        <input type='text' name='recipeName' value={recipes.recipeName} placeholder='Recipe name' onChange={(event) => updateActiveItem({ "recipeName": event.target.value })}></input>
        <br/>
        <input type='number' name='prepTime' value={displayRecipes.prepTime} placeholder='Prep time' onChange={(event) => updateActiveItem({ "prepTime": event.target.value })} ></input>
        <br/>
        <input type='text' name='ingredients' value={displayRecipes.ingredients} placeholder='Ingredients' onChange={(event) => updateActiveItem({ "ingredients": event.target.value })} ></input>
        <br/>
        <input type='textarea' name='directions' value={displayRecipes.directions} placeholder='Directions' onChange={(event) => updateActiveItem({ "directions": event.target.value })} ></input>
        <br/>
      <button type="submit">Post your Recipe!</button>
      </form>
{/* recipe name
    image
    prep time
    ingredients
    directions */}
    </div>
  )
} 

const mapStateToProps = state => {
  return{
    state,
    displayRecipes: state.lunchLineReducer.displayRecipes,
    recipes: state.lunchLineReducer.recipes,
  }
}

const mapDispatchToProps = { addRecipe, updateRecipeName, updateActiveItem
//   return{
//   addRecipe(recipeName){
//     if(recipeName){
//       dispatch(addRecipe(recipeName))
//       dispatch(updateRecipeName(''))
//     }
//   }, 
//   updateRecipeName: recipeName => dispatch(updateRecipeName(recipeName)),
//  }
}
export default connect(mapStateToProps, mapDispatchToProps)(recipeForm);
