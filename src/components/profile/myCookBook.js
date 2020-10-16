import React, { useState} from 'react';
import { connect } from "react-redux";
import { updateCookbook } from "../../store/userReducer.js";

import API from '../../constants/url.js';
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
import Grid from '@material-ui/core/Grid';
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]:{
            maxWidth: 345,    
            },
            [theme.breakpoints.down('md')]:{
                maxWidth: 450,
            },
            [theme.breakpoints.down('lg')]:{
                maxWidth: 500,
            }, 
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

function MyCookBook({ currentUser, cookbook }) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const spliceHandler = async (recipe) => {
        console.log('this is the recipe',recipe)

        //if recipe has been liked before we want to remove the liked recipe from array
        let likeBeforeStatus = false;
        let index;

        for (let i = 0; i < cookbook.length; i++) {
            if (cookbook[i].recipeName === recipe.recipeName ){
                likeBeforeStatus = true;
                index = i;
            };
        }

        if (likeBeforeStatus) {
            cookbook.splice(index, 1);
        }

        updateCookbook(cookbook);

        let url = API.BASE + API.COOKBOOK + currentUser.profile.id

        await axios.put(url, { data: cookbook })
    }

    return (
        <>

            

            <Container maxWidth="sm" className="container" borderColor="primary">
                <React.Fragment>   
                     <div>
                         
                        
                             <h2>My CookBook</h2>
                        {cookbook.map(element => (

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
                                    title={Object.values(element.recipeName)}
                                />



                                <CardMedia
                                    className={classes.media}
                                    // image={`https://source.unsplash.com/random?${recipe.recipeName}`}
                                    image={element.thumbnail}
                                    title={element.recipeName}
                                />
                                <Typography variant="subtitle1">
                                        <h3>Source:{" "}</h3>
                                        {(element.author)}
                                    </Typography>
                                <CardContent>
                                 
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton  aria-label="add to favorites" onClick={() => spliceHandler(element)}>
                                        <CloseIcon />
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
                                       <Typography variant="subtitle1">
                                        <h3>Time:</h3>{" "}
                                        {(element.prepTime)}{" "}
                                        minutes
                                    </Typography>
                                   
                                        <Typography paragraph>
                                            <h3>Ingredients:</h3>
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {element.ingredients}
                                            {/* {` ${Object.values(
                                            recipe.ingredients
                                        )} `} */}
                                        </Typography>
                                        <Typography paragraph>
                                            <h3>Directions:</h3>
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {`${element.directions} `}
                                        </Typography>
                                    </CardContent>
                                </Collapse>

                            </Card>

                        ))}
                    
                    </div>
                    
              
               </React.Fragment> 

               
               </Container>
           



            <br />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.user,
        cookbook: state.userReducer.cookbook
    };
};


export default connect(mapStateToProps)(MyCookBook);
