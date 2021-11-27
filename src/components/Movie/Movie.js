import { React } from "react";
import "./Movie.css";

function Movie({ movie }) {
  const url = movie.backdrop_path;

  return (
    <>
      <div className="card">
        <div className="image">
          <div className="wrapper">
            <a className="image" href={url}>
              {movie.title}
            </a>
          </div>
        </div>
        <div className="content">
          <p>Ratings: {movie.vote_average}</p>
          {/* <p>Description: {movie.overview}</p> */}
        </div>
      </div>
    </>
  );
}

export default Movie;
