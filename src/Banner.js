import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function Fetch() {
      const request = await axios.get(requests.NetflixOriginals);
      let index = Math.floor(Math.random() * request.data.results.length - 1);
      let randomMovie = request.data.results[index];
      setMovie(randomMovie);
      console.log(movie);
      return request;
    }
    Fetch();
  }, []);

  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="MyBanner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageBaseUrl}/${movie?.backdrop_path})`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{trunc(movie?.overview, 150)}</h1>
      </div>
      <div className="fade"></div>
    </header>
  );
}

export default Banner;
