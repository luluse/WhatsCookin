import React from 'react';
// import { Link } from 'react-router-dom';
import MyCreations from './myCreations';
import MyCookBook from './myCookBook'
import NavBar from "../layouts/navBar/navbar"

import Grid from '@material-ui/core/Grid';

function Profile(){
   return (
    <>
      <NavBar/>
       <h1>My Kitchen</h1>
       <br/>
       <Grid container>
         <Grid item xs={6}>
      <MyCreations />
      </Grid>
      <Grid item xs={6}>
      <MyCookBook />
      </Grid>
     </Grid>
    </>   
   )
}

export default Profile;