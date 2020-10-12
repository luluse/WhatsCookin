import React, { useState } from "react";
import { connect } from 'react-redux';
import Form from './recipeForm';
import { getRecipes } from '../../store/lunchLine.js';

const LunchLine = ({ getRecipes, recipes }) => {
    // let recipeMap = props.recipes;

    const [post, setPost] = useState(0);

    return (
        <div>
            <Form/>
            <h2>My lunch line</h2>
            {console.log(recipes, 'console log recipes')}
            <ul>{recipes.map((recipe => {
                return(
                    <li>{recipe.recipeName}</li>
                )
            }))} 
             </ul>
        </div>
    );
}


const mapStateToProps = state => {
    return{
        recipes: state.lunchLineReducer.recipes,
    
        
    }
}

const mapDispatchToProps = { getRecipes }
export default connect(mapStateToProps, mapDispatchToProps)(LunchLine);
