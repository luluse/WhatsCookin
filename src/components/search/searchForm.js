import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getSearchResults } from "../../store/search.js";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { orange } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";


/*
Ingredients, picture, title, 
When someone clicks expand
Make a get request to recipe API using the id to retireve directions(instructions) and cook time
*/





const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: orange[500],
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 1000,
    },
}));
// require('dotenv').config({ path: '../../.env'});

// router.get('/searchByCuisine', searchByCuisine);router.get('/searchByIngredients', searchByIngredients);

const API = process.env.API_KEY;
function SearchForm({ results }) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [directions, setDirections] = useState('');



  let bestDirections = ''
    const handleExpandClick = (id) => {
        setExpanded(!expanded);
      
    };

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getSearchResults([]);
    }, [getSearchResults]);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const resetSearchField = () => {
        setSearchValue("");
    };


    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const query = {
            ingredients: searchValue,
            cuisine: searchValue,
        };

        let results = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query.ingredients}&apiKey=db8c64af4c834b0187f178ac867a95d1&addRecipeInformation=true&instructionsRequired=true`
        );
        // TODO: IS MAKE IT SO YOU CAN SEARCH BY CUISINE
        // Make the results saveable
        // PUT API KEY INTO DOTENV


        let recipeIds = [];
        await results.data.map(recipe => recipeIds.push(recipe.id))
         let ids = recipeIds.toString();
        let recipesWithDirections = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&includeInstruction=true&apiKey=db8c64af4c834b0187f178ac867a95d1`)



        setSearchResults(recipesWithDirections.data);
        console.log("RRRResults", searchResults)
    };


    return (
        <div>
            <form>
                <h1>Search for a recipe</h1>
                <input
                    type="text"
                    placeholder="search by ingredients or cuisine..."
                    onChange={handleSearchInputChange}
                />
                <button onClick={handleSearchSubmit} type="submit">
                    Search For Recipes!
                </button>
            </form>

       <div>
         
         {searchResults.map((recipe) => (
           
            <Card key={Math.random()}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    title={JSON.stringify(recipe.title)}
                    
                />

                <CardMedia
                    className={classes.media}
                    image={recipe.image}
                    // image={recipe.thumbnail}
                    title={recipe.recipeName}
                />

                <CardContent>
            
                        <a href={recipe.sourceUrl}>
                        Source: {recipe.sourceName}</a>
                        
                    
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>{console.log(recipe, 'this is the recipe for real')}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography variant="subtitle1">
                        Time: {recipe.readyInMinutes} minutes
                    </Typography>
                    <Typography variant='h6'>Ingredients:</Typography>
                        {recipe.extendedIngredients.map((item) => (
                            <Typography key={Math.random()} paragraph>{item.original}</Typography>
                        ))}

                        <Typography variant='h6'>Directions:</Typography>
                        {recipe.analyzedInstructions.length === 0 ? 
                        <Typography>{recipe.instructions}</Typography> : recipe.analyzedInstructions[0].steps.map((step) => ( console.log(step, 'this is a step in the recipe'),
                            <Typography key={Math.random()} paragraph>{JSON.stringify(step.number), ' ', step.step}</Typography>
                        ))}
                    </CardContent>
                </Collapse>
            </Card>
            ))}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.searchReducer.results,
        id: state.searchReducer.results.id,
    };
};
const mapDispatchToProps = { getSearchResults };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);