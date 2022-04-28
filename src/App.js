import "./App.css";
// import { useState, useEffect } from "react";
// import api, { api_key } from "./axios";
import { Layout } from "./Layout";
import { UpComing } from "./UpComing";
import { TopRated } from "./TopRated";
import { NowPlaying } from "./NowPlaying";
import { Popular } from "./Popular";
import { MovieFilter } from "./MovieFilter";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";

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
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="MovieFilter" element={<MovieFilter />}>
          <Route path="NowPlaying" element={<NowPlaying />} />
          <Route path="UpComing" element={<UpComing />} />
          <Route path="TopRated" element={<TopRated />} />
          <Route path="Popular" element={<Popular />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
