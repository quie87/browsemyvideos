import { React } from "react";
import Movie from "../Movie/Movie";

function Movies({ popularMovies }) {
  return (
    <>
      <ul>
        {popularMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default Movies;
