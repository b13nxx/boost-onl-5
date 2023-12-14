import React, { useState } from "react";

const RecipeCard = ({
  title,
  description,
  image,
  deleteRecipe,
  id,
  isLoading,
}) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);

  return (
    <div className="recipe-card">
      <img className="recipe-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={async () => {
          setIsDeletedLoading(true);
          await deleteRecipe(id);
          setIsDeletedLoading(false);
        }}
        className="btn-delete"
      >
        {isDeletedLoading ? "Loading" : "Sil"}
      </button>
    </div>
  );
};

export default RecipeCard;
