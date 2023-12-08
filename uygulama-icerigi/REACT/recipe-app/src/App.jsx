import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {



  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm/>
      <RecipeList  />
    </>
  );
}

export default App;
