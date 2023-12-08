import React, { useState } from "react";

const NewRecipeForm = () => {
  const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submitting new recipe:");

        setTitle('')
    }


  return (
    <form onSubmit={handleSubmit} >
      <input
        value={title}
        type="text"
        placeholder="Recipe Title"
        required
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea placeholder="Recipe Description" required />
      <input type="text" placeholder="Image URL" required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default NewRecipeForm;
