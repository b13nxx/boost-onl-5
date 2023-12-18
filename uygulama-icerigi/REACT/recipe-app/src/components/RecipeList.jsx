import React, { useContext } from 'react'
import RecipeCard from './RecipeCard'
import { ApiContext } from '../context/ApiContext'

const RecipeList = () => {

  const {recipes} = useContext(ApiContext)

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id}  {...recipe}  /> )}
    </div>
  )
}

export default RecipeList