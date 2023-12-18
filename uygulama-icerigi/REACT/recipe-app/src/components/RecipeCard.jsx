import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const RecipeCard = ({ title, description, image, id }) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  const { deleteRecipe } = useContext(ApiContext);

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
