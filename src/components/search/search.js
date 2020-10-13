import React from 'react';


function Search(){
   return(
    <>
    <form>
       <h1>Search for a recipe</h1>
       <input type="text" placeholder="search by ingredients or cuisine..."/>
       </form>
       {/* Cuisines as a dropdown */}
       <br/>
    </>   
   )
}

export default Search;