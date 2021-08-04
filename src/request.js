export const APIKEY = "1c3a27a41dc824b3f8e0d08763ba9cbc";

const requests = {
  Trending: `/trending/all/week?api_key=${APIKEY}`,
  NetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${APIKEY}`,
  ActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
