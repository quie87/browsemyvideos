import { React } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

function Movies({ popularMovies, title }) {
  return (
    <div className="container">
      <div>
        <h2>{title}</h2>
      </div>
      <div className="content">
        {popularMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
