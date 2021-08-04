import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import fetchUrl from "./request";
import Banner from "./Banner";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Row
        title="Netflix Originals"
        Url={fetchUrl.NetflixOriginals}
        LargeRow={true}
      />
      <Row title="Trending Now" Url={fetchUrl.Trending} />
      <Row title="Top Rated" Url={fetchUrl.TopRated} />
      <Row title="Action Movies" Url={fetchUrl.ActionMovies} />
      <Row title="Comedy Movies" Url={fetchUrl.ComedyMovies} />
      <Row title="Horror Movies" Url={fetchUrl.HorrorMovies} />
      <Row title="Romance Movies" Url={fetchUrl.RomanceMovies} />
      <Row title="Documentaries" Url={fetchUrl.Documentaries} />
    </div>
  );
}

export default App;
