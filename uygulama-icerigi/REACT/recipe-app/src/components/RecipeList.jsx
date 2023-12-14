import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({recipes, deleteRecipe, isLoading={isLoading}}) => {

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} deleteRecipe={deleteRecipe} {...recipe} isLoading={isLoading} /> )}
    </div>
  )
}

export default RecipeList