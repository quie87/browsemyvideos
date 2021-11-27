import { React, useEffect, useState } from "react";
import "./Movie.css";

function Movie({ movie }) {
  return (
    <>
      <div className="card">
        <div className="image">
          <div className="wrapper">
            <a
              className="image"
              href={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
            >
              <img
                loading="lazy"
                alt="poster"
                class="poster"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              />
            </a>
          </div>
        </div>
        <div className="movie-content">
          <p>
            <b>Title:</b> {movie.title}
          </p>
          <p>
            <b>Ratings:</b> {movie.vote_average}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
