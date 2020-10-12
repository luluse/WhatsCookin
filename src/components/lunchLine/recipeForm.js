import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { addRecipe } from '../../store/lunchLine.js';


const recipeForm = ({ addRecipe }) => {

  const [post, setPost] = useState([{ recipeName: ''}]);

  return (
    <div>
      <h2>Add a recipe!</h2> 
      <form onSubmit={e => {
        e.preventDefault();
        addRecipe({ post });
        setPost('');
      }}>
        <input type='text' name='recipeName' value={displayRecipes.recipeName} placeholder='Recipe name' ></input>
       
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
    displayRecipes: state.lunchLineReducer.displayRecipes,
  }
}

const mapDispatchToProps = { addRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(recipeForm);
