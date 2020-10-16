import React, { useState } from 'react';
import { connect } from "react-redux";
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
import Container from '@material-ui/core/Container';
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


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


function MyCreations({ creations }) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

console.log('CREAT', creations);
    return (

            <>
            

                <Container maxWidth="sm" className="container" className={classes.column} >
                    <React.Fragment>   
                         <div>
                             
                             
                                <h2>My Creations</h2> 
                            {creations.map((recipe) => ( 
    
                                <Card key={Math.random()}>
    
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                aria-label="recipe"
                                                className={classes.avatar}
                                            >
                                                D
                                            </Avatar>
                                        }
                                        title={Object.values(recipe.recipeName)}
                                    />
    
    
    
                                    <CardMedia
                                        className={classes.media}
                                        // image={`https://source.unsplash.com/random?${recipe.recipeName}`}
                                        image={recipe.thumbnail}
                                        title={recipe.recipeName}
                                    />
                                    <Typography variant="subtitle1">
                                            <h3>Source:{" "}
                                            {(recipe.author)}
                                            </h3>
                                            
                                        </Typography>
                                    <CardContent>
                                     
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton  aria-label="add to favorites">
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
                                           <Typography variant="subtitle1">
                                            <h3>Time:</h3>{" "}
                                            {(recipe.prepTime)}{" "}
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
                                                {recipe.ingredients}
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
                                                {`${recipe.directions} `}
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

    );

}

const mapStateToProps = (state) => {

    return {

        creations: state.userReducer.user.creations,
        userID: state.userReducer.user.id

    };

};

// const mapDispatchToProps = { getRecipes };


export default connect(mapStateToProps)(MyCreations);
