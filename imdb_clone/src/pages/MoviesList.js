import React, { useEffect, useState } from "react";
import { getMovies } from "../functions/movies";
import MovieDisplay from "../components/movieDisplayCard";
import { Link } from "react-router-dom";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    getMovies().then((res) => {
    //   console.log(res.data);
      setMovies(res.data);
      console.log(movies);
    });
  };

  return (
    <div>
      <Link to="/movie/create" className="float-end me-4 mt-4">
        <h3>+</h3>
      </Link>
        {/* <button  className="me-4 float-end mt-4 "><h3>+</h3></button> */}
      <div className="text-center">
        <h1>Movies</h1>
        

        <div className="card-group">

        {movies.map((movie) => {
          
          return <MovieDisplay key={movie.movie_id} name={movie.name} yor={movie.yor} description={movie.plot} url={movie.poster} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
