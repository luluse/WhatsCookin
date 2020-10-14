import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { addRecipe, getRecipes } from '../../store/lunchLine.js';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function RecipeForm ({ addRecipe, getRecipe }) {
  
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [prepTime, setPrepTime] = useState(0);
  const [ingredients, setIngredients]= useState([]);
  const [directions, setDirections] = useState([]);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    const recipe = {
      Profile: 1,
      recipeName: name,
      thumbnail,
      prepTime: parseInt(prepTime),
      ingredients,
      directions
    }
    axios.post('http://localhost:3009/api/recipe', recipe)
    .then(res => {
      // We want to refresh recipe list here
      getRecipes();
      console.log(res, ' axios response');
    })
    .catch(error => {
      console.log(error)
    })

  };
//  console.log('recipe', ([name, prepTime, ingredients, directions]));
  return (
    <div>
      <h2>Add a recipe!</h2> 
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <input type='text' name='recipeName' placeholder='Recipe name' value={name} 
        onChange={(event) => setName(event.target.value)}></input>
        <br/>
        <input type='text' name='thumbnail' placeholder='Image URL' value={thumbnail} 
        onChange={(event) => setThumbnail(event.target.value)}></input>
        <br/>
        <input type='number' name='prepTime' value={prepTime} placeholder='Prep time' onChange={(event) => setPrepTime(event.target.value)} ></input>
        <br/>
        <input type='text' name='ingredients' value={ingredients} placeholder='Ingredients' onChange={(event) => setIngredients(event.target.value)} ></input>
        <br/>
        <input type='textarea' name='directions' value={directions} placeholder='Directions' onChange={(event) => setDirections(event.target.value)} ></input>
        <br/>
      <button type="submit">Post your Recipe!</button>
      </form>
    </div>
  )
} 

const mapStateToProps = state => {
  return{
    state,
    displayRecipes: state.lunchLineReducer.displayRecipes,
    recipes: state.activeItem,
  }
}

const mapDispatchToProps = { addRecipe, getRecipes }
export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
