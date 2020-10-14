import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./recipeForm";
import { getRecipes } from "../../store/lunchLine.js";

import '../../App.css';

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
import Typography from "@material-ui/core/Typography";
import { orange } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from '@material-ui/core/Container';
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

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
        margin: 'auto',
        maxWidth: 1000,
    },
}));

// function RecipeReviewCard( recipes ) {
//     const classes = useStyles();
//     const [expanded, setExpanded] = useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
const LunchLine = ({ getRecipes, recipes }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        getRecipes()
    }, [getRecipes])

    return (
        <Container maxWidth="sm" className="container">
        <div className={classes.root}>
            <Form />

            <h2>My lunch line</h2>

            <div>
                {recipes.map((recipe) => (

                    <Card key={Math.random()}>

                        <CardHeader
                            avatar={
                                <Avatar
                                    aria-label="recipe"
                                    className={classes.avatar}
                                >
                                    R
                                        </Avatar>
                            }
                            title={Object.values(recipe.recipeName)}
                        />



                        <CardMedia
                            className={classes.media}
                            image={`https://source.unsplash.com/random?${recipe.recipeName}`}
                            // image={recipe.thumbnail}
                            title={recipe.recipeName}
                        />


                        <CardContent>
                            <Typography variant="subtitle1">
                                Prep Time:{" "}
                                {JSON.stringify(recipe.prepTime)}{" "}
                                        minutes
                                    </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
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
                        <Collapse
                            in={expanded}
                            timeout="auto"
                            unmountOnExit
                        >
                            <CardContent>
                                <Typography paragraph>
                                    Ingredients:
                                        </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {` ${Object.values(
                                        recipe.ingredients
                                    )} `}
                                </Typography>
                                <Typography paragraph>
                                    Directions:
                                        </Typography>

                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {`${recipe.directions} `}
                                </Typography>
                            </CardContent>
                        </Collapse>

                    </Card>

                ))}

            </div>


        </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        recipes: state.lunchLineReducer.recipes,
    };
};

const mapDispatchToProps = { getRecipes };
export default connect(mapStateToProps, mapDispatchToProps)(LunchLine);
