import { React, useState, useEffect } from "react";

function Main() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromAPI = await fetchMovies();

      setMovies(moviesFromAPI.results);
    };

    getMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );

    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <main className="Main">
      <div>{movies.length ? <h2>{movies[0].title}</h2> : ""}</div>
    </main>
  );
}

export default Main;
