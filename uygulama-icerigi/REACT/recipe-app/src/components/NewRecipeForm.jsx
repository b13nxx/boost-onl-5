import React, { useState } from "react";
import axios from "axios";

const NewRecipeForm = ({addRecipeToList}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");




  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", { title, description, image })
      .then((response) => {
        console.log(response.data);
        addRecipeToList(response.data);
      })
      .catch((error) => {
        console.error("There was an error posting the new recipe!", error);
      });

    setTitle("");
    setDescription("")
    setImage("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="Recipe Title"
        required
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={description}
        placeholder="Recipe Description"
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <input
        value={image}
        type="text"
        placeholder="Image URL"
        onChange={(event) => setImage(event.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default NewRecipeForm;
