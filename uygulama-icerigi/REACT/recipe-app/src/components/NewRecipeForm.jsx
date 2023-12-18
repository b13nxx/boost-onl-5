import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState(false)
  const [imageErr, setImageErr] = useState(false)

  const {addRecipeToList, isLoading} = useContext(ApiContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    if(title.trim() && description.trim() && image.trim()){
      addRecipeToList(title,description,image)
      setTitle("");
      setDescription("")
      setImage("")
    } else {
      !title.trim() && setTitleErr(true)
      !description.trim() && setDescriptionErr(true)
      !image.trim() && setImageErr(true)
    }




  };

  return (
    <form className="new-recipe-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          value={title}
          type="text"
          placeholder="Recipe Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        {titleErr && <p className="input-err">Recipe Title cannot be empty!</p>}
      </div>
      <div className="form-control">
        <textarea
          value={description}
          placeholder="Recipe Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {descriptionErr && <p className="input-err">Recipe Description cannot be empty!</p>}
      </div>
      <div className="form-control">
        <input
          value={image}
          type="text"
          placeholder="Image URL"
          onChange={(event) => setImage(event.target.value)}
        />
        {imageErr && <p className="input-err">Image URL cannot be empty!</p>}
      </div>
      <button className="btn-submit" type="submit">{isLoading.add ? "Loading..." : "Add Recipe"}</button>
    </form>
  );
};

export default NewRecipeForm;
