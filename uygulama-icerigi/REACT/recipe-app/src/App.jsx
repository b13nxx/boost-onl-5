import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import { ThemeContex } from "./context/ThemeContex";
import { ApiContextProvider } from "./context/ApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContex);

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header />
        <ApiContextProvider>
          <Routes>
            <Route path="/" element={<Home/>} />     
            <Route path="/add-recipe" element={<NewRecipeForm/>} />     
            <Route path="/recipes" element={<RecipeList/>} />     
          </Routes>
        </ApiContextProvider>
      </div>
    </Router>
  );
}

export default App;
