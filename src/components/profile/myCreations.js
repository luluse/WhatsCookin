import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getRecipes } from '../../store/lunchLine.js';

function MyCreations({ recipes }) {

    useEffect(() => {
        getRecipes()
    }, [getRecipes])

    return (
        <React.Fragment>
            <h2>My Creations</h2>
            <br />
            {recipes.map((recipe) => (
                <p>{recipe.recipeName}</p>
            ))}
        </React.Fragment>
    );


}

const mapStateToProps = (state) => {

    return {

        recipes: state.lunchLineReducer.recipes,

    };

};

const mapDispatchToProps = { getRecipes };


export default connect(mapStateToProps, mapDispatchToProps)(MyCreations);
