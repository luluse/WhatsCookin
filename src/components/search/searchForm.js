import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSearchResults } from '../../store/search.js';


  // router.get('/searchByCuisine', searchByCuisine);router.get('/searchByIngredients', searchByIngredients);


function SearchForm (){
  const [searchValue, setSearchValue] = useState('');

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
    console.log('QUERY', query);
    let results = await axios.get('http://localhost:3009/api/searchByIngredients', {query});
    getSearchResults(results);
    // resetSearchField();
    console.log('HERE WE ARE')
  }
  return(
    <form>
       <h1>Search for a recipe</h1>
       <input type="text" placeholder="search by ingredients or cuisine..." onChange={handleSearchInputChange}/>
       <button onClick={handleSearchSubmit}type="submit">Search For Recipes!</button>
       </form>
  )
}

const mapStateToProps = state => {
  return{
    results: state.searchReducer.results,
  }
  
}
const mapDispatchToProps ={ getSearchResults }

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);



