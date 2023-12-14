import React from 'react'

const RecipeCard = ({title, description, image, deleteRecipe}) => {
  return (
    <div className='recipe-card'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Sil</button>
    </div>
  )
}

export default RecipeCard