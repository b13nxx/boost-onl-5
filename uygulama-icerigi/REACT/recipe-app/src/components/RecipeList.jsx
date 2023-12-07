import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({recipes}) => {




  return (
    <div>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} /> )}
    </div>
  )
}

export default RecipeList