import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => setRecipes(response.data))
      .catch((error) => {
        console.log("There was an error while fetching the recipes");
      });
  }, []);

  const addRecipeToList = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes,newRecipe])
  }

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm addRecipeToList={addRecipeToList} />
      <RecipeList recipes={recipes}/>
    </>
  );
}

export default App;
