import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import { ThemeContex } from "./context/ThemeContex";
import { ApiContextProvider } from "./context/ApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  const { theme } = useContext(ThemeContex);

  return (
    <AuthProvider>
      <Router>
        <div className={`app ${theme}`}>
          <Header />
          <ApiContextProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Home />} />} />
              <Route
                path="/add-recipe"
                element={<PrivateRoute element={<NewRecipeForm />} />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ApiContextProvider>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
