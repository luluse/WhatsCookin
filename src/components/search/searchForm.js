import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSearchResults } from '../../store/search.js';
// require('dotenv').config({ path: '../../.env'});




  // router.get('/searchByCuisine', searchByCuisine);router.get('/searchByIngredients', searchByIngredients);

const API = process.env.API_KEY;
function SearchForm ({results}){

  const [searchResults, setSearchResults] = useState([]);
 
  useEffect(()=> {
    getSearchResults([]);
  }, [getSearchResults]);

  const [searchValue, setSearchValue] = useState('');
  console.log('RESULTS FROM STATE', results);
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetSearchField = () => {
    setSearchValue('')
  }

  const handleSearchSubmit = async (e)  => {
    e.preventDefault();
    const query = {
      ingredients: searchValue
    }
   
    let results = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query.ingredients}&apiKey=291a3b6a2ab14c9cade36a65da1b549b`);
    setSearchResults(results.data);
    console.log('RRRResults', results.data);
    
    
  }
  return(
    <div>
    <form>
       <h1>Search for a recipe</h1>
       <input type="text" placeholder="search by ingredients or cuisine..." onChange={handleSearchInputChange}/>
       <button onClick={handleSearchSubmit}type="submit">Search For Recipes!</button>
       </form>
       <ul>
         {searchResults.map((result) => (
           <li>
             {result.title}
           </li>
         ))}
       </ul>
       </div>
  )
}

const mapStateToProps = state => {
  return{
    results: state.searchReducer.results,
  }
  
}
const mapDispatchToProps ={ getSearchResults }

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);



