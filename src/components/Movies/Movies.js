import { React } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

function Movies({ movies, title }) {
  return (

    <>{movies.length > 0 ? 
      <div className="container">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="content">
          {movies.length > 0 && movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    : <div className="container"><h2>Error when getting {title}</h2></div>}

    </>
  );
}

export default Movies;
