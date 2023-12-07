import React from 'react'

const RecipeCard = ({title, description, image}) => {
  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default RecipeCard