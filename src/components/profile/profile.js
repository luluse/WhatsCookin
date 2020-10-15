import React from 'react';
// import { Link } from 'react-router-dom';
import MyCreations from './myCreations';
import MyCookBook from './myCookBook'
import NavBar from "../layouts/navBar/navbar"

function Profile(){
   return(
    <>
      <NavBar/>
       <h1>My profile</h1>
       <br/>
      <MyCreations />
      <MyCookBook />
     
    </>   
   )
}

export default Profile;