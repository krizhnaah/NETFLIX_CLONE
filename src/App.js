import "./App.css";
import "./Header.css";
import "./pagenotfound.css";
import "./movie-relatd.css";
import "./Home-css.css";
import "./css/cast_and_crew.css";
import "./components/movies/related_movies/similar-movies.css";
import "./components/genrebased/genrebased.css";

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

function App() {
  return (
    <div className="page-background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="tvshow">
            <Route path="/tvshow/latest" element={<TvShowLatest />} />
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
          <Route path="/movies/:moviegenre" element={<TvShowDetails />} />
          <Route path="/tvshow/show-detail/:tvid" element={<TvShowDetails />} />
          <Route path="/tvshow/:tvgenre" element={<TvShowDetails />} />
          <Route path="/person/:id" element={<Person />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
