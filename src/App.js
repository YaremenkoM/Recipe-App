import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const APP_ID = "535a0f48";
  const APP_KEY = "6fb31242cc7f1743618d502d9e5d414d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    //simpler way:
   /* 
    fetch(https://api.edamam.com)
     .than(response => {
       response.json();
      })
    */
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  return (
    <div className="App">

        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" 
            placeholder="search for recipe"
            type="text" 
            value={search} 
            onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

      <div className="RecipeContainer">
        {recipes.map( recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
