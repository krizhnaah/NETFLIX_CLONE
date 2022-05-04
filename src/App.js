import "./App.css";
import "./Header.css";
import "./pagenotfound.css";
// import { useState, useEffect } from "react";
// import api, { api_key } from "./axios";

import { Layout } from "./Layout";
import { UpComing } from "./UpComing";
import { TopRated } from "./TopRated";
import { NowPlaying } from "./NowPlaying";
import { Popular } from "./Popular";
import { Home } from "./Home";
import PageNotFound from "./PageNotFound";
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
    <div className="page-background">
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Movie">
            <Route path="/Movie/NowPlaying" element={<NowPlaying />} />
            <Route path="/Movie/UpComing" element={<UpComing />} />
            <Route path="/Movie/TopRated" element={<TopRated />} />
            <Route path="/Movie/Popular" element={<Popular />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
