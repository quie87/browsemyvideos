import { React } from "react";

function Movie({ movie }) {
  return (
    <>
      <li>
        <h2>{movie.title}</h2>
      </li>
    </>
  );
}

export default Movie;
