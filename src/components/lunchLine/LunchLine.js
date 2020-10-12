import React, { useState } from "react";
import { connect } from 'react-redux';

import { addRecipe } from '../../store/lunchLine.js';

const LunchLine = (props) => {
    let recipeMap = props.recipes;

    const [post, setPost] = useState(0);

    return (
        <div>
            <h2>My lunch line</h2>
            <ul>{recipeMap.map((recipe => {
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
        recipe: state.recipes,
    }
}

const mapDispatchToProps = { addRecipe }
export default connect(mapStateToProps, mapDispatchToProps)(LunchLine);
