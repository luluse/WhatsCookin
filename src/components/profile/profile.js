import React from 'react';
// import { Link } from 'react-router-dom';
import MyCreations from './myCreations';
import MyCookBook from './myCookBook'

function Profile(){
   return(
    <>
       <h1>My profile</h1>
       <br/>
      <MyCreations />
      <MyCookBook />
     
    </>   
   )
}

export default Profile;