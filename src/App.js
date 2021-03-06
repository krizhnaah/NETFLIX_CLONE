import "./App.css";
import "./Header.css";
import "./pagenotfound.css";
import "./movie-relatd.css";
import "./Home-css.css";
import "./css/cast_and_crew.css";
import "./components/movies/related_movies/similar-movies.css";
import "./components/genrebased/genrebased.css";
import "./components/person/person.css";
import "./components/person/person-movie-tv-credits.css";
import "./components/search/search.css";

import MovieDetails from "./MovieDetails";
import { TvShowLatest } from "./components/TvShowLatest";
import { Layout } from "./Layout";
import { UpComing } from "./UpComing";
import { TopRated } from "./TopRated";
import { NowPlaying } from "./NowPlaying";
import { Popular } from "./Popular";
import { Home } from "./Home";
import PageNotFound from "./PageNotFound";
import { Route, Routes } from "react-router-dom";
import { TvShowPopular } from "./components/TvShowPopular";
import { TvShowTopRated } from "./components/TvShowTopRated";
import TvShowDetails from "./components/TvShowDetails";
import Person from "./components/person/Person";
import GenreBasedMovie, {
  GenreBasedTV,
} from "./components/genrebased/GenreBased";
import Result from "./components/search/Result";
import {
  AllSearch,
  MovieSearch,
  PersonSearch,
  TvSearch,
} from "./components/search/Search";

function App() {
  return (
    <div className="page-background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/tvshow">
            <Route path="/tvshow/popular" element={<TvShowPopular />} />
            <Route path="/tvshow/top-rated" element={<TvShowTopRated />} />
          </Route>
          <Route path="/movie">
            <Route path="/movie/now-playing" element={<NowPlaying />} />
            <Route path="/movie/up-coming" element={<UpComing />} />
            <Route path="/movie/top-rated" element={<TopRated />} />
            <Route path="/movie/popular" element={<Popular />} />
          </Route>
          <Route
            path="/movie/movie-detail/:movieid"
            element={<MovieDetails />}
          />
          <Route path="/movies/:moviegenre" element={<GenreBasedMovie />} />
          <Route path="/tvshow/show-detail/:tvid" element={<TvShowDetails />} />
          <Route path="/tvshow/:tvgenre" element={<GenreBasedTV />} />
          <Route path="/person/:personid" element={<Person />} />
          <Route path="/search/:keyword" element={<Result />}>
            <Route path="/search/:keyword/all" element={<AllSearch />} />
            <Route
              path="/search/:keyword/movies/:movie"
              element={<MovieSearch />}
            />
            <Route path="/search/:keyword/tv/:tv" element={<TvSearch />} />
            <Route
              path="/search/:keyword/people/:people"
              element={<PersonSearch />}
            />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
