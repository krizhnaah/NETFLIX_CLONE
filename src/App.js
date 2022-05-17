import "./App.css";
import "./Header.css";
import "./pagenotfound.css";
import "./movie-relatd.css";
import "./Home-css.css";
import "./css/cast_and_crew.css";
// import { useState, useEffect } from "react";
// import api, { api_key } from "./axios";
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

function App() {
  // const [data, setData] = useState("");
  // const apiUpComing = api.get("movie/upcoming", { params: { api_key } });

  // useEffect(() => {
  //   const data = async () => {
  //     const response = await apiUpComing;
  //     setData(response.data.results);
  //   };
  //   data();
  // });

  // console.log(data);
  return (
    <div className="page-background">
      {/* <Layout /> */}
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
          <Route
            path="/tvshow/show-detail/:movieid"
            element={<TvShowDetails />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
