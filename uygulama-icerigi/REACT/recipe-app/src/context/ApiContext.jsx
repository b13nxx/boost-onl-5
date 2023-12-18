import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({
    read: false,
    delete: false,
    add: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  const addRecipeToList = async (title, description, image) => {
    const newRecipe = { title, description, image };
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    try {
      const response = await axios.post(
        "http://localhost:3001/recipes",
        newRecipe
      );

      if (response.status === 201) {
        setRecipes((prevRecipes) => [...prevRecipes, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));
    const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
    if (response.status === 200) {
      setRecipes((prevRecipeList) =>
        prevRecipeList.filter((recipe) => recipe.id !== id)
      );
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
  };

  return (
    <ApiContext.Provider value={{recipes,isLoading,addRecipeToList,deleteRecipe}}>
        {children}
    </ApiContext.Provider>
  )
};
