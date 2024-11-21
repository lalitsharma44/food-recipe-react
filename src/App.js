import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';

function App() {
    
   const [search, setSerach] = useState("Pizza");
   const [recipes, setRecipes] = useState([]);

   const APP_ID = "cf28421c";
   const APP_KEY = "872ca24a6305491c170a4362111960b2";

    useEffect(() => {
          getRecipes();
    }, []);

    const getRecipes = async () => {
      const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   
      setRecipes(res.data.hits);
    };


   const onInputChange = e => {
    setSerach(e.target.value);
   };

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} getRecipes={getRecipes} />
      <div className="container-1">
      <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
