import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTraier from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, Url, LargeRow }) {
  const [Movies, setMovies] = useState([]);
  const [trailerId, setTrailer] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Url);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [Url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  let handleTrailer = (id) => {
    if (trailerId) {
      setTrailer("");
    } else {
      movieTraier(null, { tmdbId: id, id: true })
        .then((response) => {
          setTrailer(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h2 className="RowTitle">{title}</h2>

      <div className="posters">
        {Movies.map((movie) => (
          <img
            onClick={() => handleTrailer(movie.id)}
            key={movie.id}
            className={`each_poster ${LargeRow && "largePoster"}`}
            src={`${imageBaseUrl}${
              LargeRow ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerId && <YouTube videoId={trailerId} opts={opts}></YouTube>}
    </div>
  );
}

export default Row;
