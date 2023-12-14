import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({recipes, deleteRecipe}) => {

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} deleteRecipe={deleteRecipe} {...recipe} /> )}
    </div>
  )
}

export default RecipeList