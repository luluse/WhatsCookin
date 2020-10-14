import React, { useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { addRecipe, getRecipes } from '../../store/lunchLine.js';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../../constants/url';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));

function RecipeForm({ addRecipe, getRecipe }) {

  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [prepTime, setPrepTime] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    axios.post(API.BASE + API.RECIPE, recipe)
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
    <Card className={classes.root} style={{ backgroundColor: 'orange' }}>

      <CardActions disableSpacing>
        <Typography title="true">Add a recipe</Typography>
        <AddIcon fontSize="large"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </AddIcon>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Recipe Name" type='text' name='recipeName' placeholder='Recipe name' value={name}
              onChange={(event) => setName(event.target.value)} />

            <TextField id="standard-basic" label="Prep Time in minutes" type="number" name='prepTime' value={prepTime} placeholder='Prep time' onChange={(event) => setPrepTime(event.target.value)} />

            <TextField id="standard-textarea" label="Ingredients" placeholder="Ingredients" multiline type='text' name='ingredients' value={ingredients} onChange={(event) => setIngredients(event.target.value)} />

            <TextField id="standard-textarea" label="Directions" placeholder="Directions" multiline type='textarea' name='directions' value={directions} onChange={(event) => setDirections(event.target.value)} />

            <br /><br />

            <Button variant="contained" type="submit">Post your Recipe</Button>



          </form>

        </CardContent>
      </Collapse>

    </Card>
    // <div>
    //   <h2>Add a recipe!</h2> 
    //   <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    //     <input type='text' name='recipeName' placeholder='Recipe name' value={name} 
    //     onChange={(event) => setName(event.target.value)}></input>
    //     <br/>
    //     <input type='text' name='thumbnail' placeholder='Image URL' value={thumbnail} 
    //     onChange={(event) => setThumbnail(event.target.value)}></input>
    //     <br/>
    //     <input type='number' name='prepTime' value={prepTime} placeholder='Prep time' onChange={(event) => setPrepTime(event.target.value)} ></input>
    //     <br/>
    //     <input type='text' name='ingredients' value={ingredients} placeholder='Ingredients' onChange={(event) => setIngredients(event.target.value)} ></input>
    //     <br/>
    //     <input type='textarea' name='directions' value={directions} placeholder='Directions' onChange={(event) => setDirections(event.target.value)} ></input>
    //     <br/>
    //   <button type="submit">Post your Recipe!</button>
    //   </form>
    // </div>
  )
}

const mapStateToProps = state => {
  return {
    state,
    displayRecipes: state.lunchLineReducer.displayRecipes,
    recipes: state.activeItem,
  }
}

const mapDispatchToProps = { addRecipe, getRecipes }
export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
