import { React } from "react";

function Main() {
  const api_key = process.env.REACT_APP_API_KEY;

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );

    const data = await res.json();

    console.log(data);
  };

  fetchMovies();
  return <div className="Main"></div>;
}

export default Main;
