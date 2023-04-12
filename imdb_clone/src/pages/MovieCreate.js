import React, { useState } from "react";
import MovieForm from "../components/forms/MovieCreateForm";
import FileUpload from "../functions/FileUpload";
import { toast } from "react-toastify";
import { createMovie } from "../functions/movies";
const instate = {
  title: "",
  yor: "",
  plot: "",
  images: [],
};

const MovieCreate = () => {
  const [values, setValues] = useState(instate);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(values)
      .then((res) => {
        toast.success("Product Created");
      })
      .catch((error) => {
        toast.error(error.response.data.err);
      });
  };
  
  return (
    <div>

      <h1 className="text-center">Add movie</h1>
      <hr />

      <FileUpload values={values} setValues={setValues}/>
      <MovieForm handleChange={handleChange} 
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      />

    </div>
  );
};

export default MovieCreate;
