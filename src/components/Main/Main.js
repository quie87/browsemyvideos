import { React, useState, useEffect } from "react";
import Movies from "../Movies/Movies";

function Main() {
  const api_key = process.env.REACT_APP_API_KEY;
  const topRatedMoviesPath = 'top_rated';
  const popularMoviesPath = 'popular'

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const moviesFromAPI = await fetchMovies(topRatedMoviesPath);

    setTopRatedMovies(moviesFromAPI.results);
  };

  const getPopularMovies = async () => {
    const moviesFromAPI = await fetchMovies(popularMoviesPath);

    setPopularMovies(moviesFromAPI.results)
  }

  const fetchMovies = async (path) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${path}?api_key=${api_key}&language=en-US&page=1`
    );

    return await res.json();
  };

  return (
    <main
      className="Main"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Movies movies={topRatedMovies} title={"Top Rated Movies"} />
      <Movies movies={popularMovies} title={"Popular Movies"} />
    </main>
  );
}

export default Main;
