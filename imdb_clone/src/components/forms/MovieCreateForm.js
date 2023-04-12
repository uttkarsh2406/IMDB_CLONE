import React from "react";


const MovieForm = (props) => {
  const { handleChange, values, setValues,handleSubmit } = props;
  const { title, yor, plot, images } = values;

  return (
    <div>
      <form className="p-3 m-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title</label>
          <input
            type="text"
            placeholder="Enter Movie Name"
            name="title"
            className="form-control"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Year of Release</label>
          <input
            value={yor}
            type="text"
            placeholder="Enter Year of Release"
            name="yor"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Plot</label>
          <input
            value={plot}
            type="text"
            placeholder="Enter Movie plot"
            name="plot"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        
        
        <button className="btn btn-primary btn-outline" type="submit">ADD MOVIE</button>
      </form>
    </div>
  );
};
export default MovieForm;
