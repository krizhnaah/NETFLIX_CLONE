import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import { FirstFewMovie } from "../Movies";
import { Link } from "react-router-dom";

export const NowPlayingHome = () => {
  const [data, setData] = useState([]);
  const apiUpNowPlaying = api.get("movie/now_playing", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpNowPlaying;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log(data);

  return (
    <>
      <div className="page-container">
        <div>
          <FirstFewMovie movieArray={data} />
        </div>
        <div>
          <Link to={"/Movie/now-playing"}>
            <span className="load-more-button">Load More</span>
          </Link>
        </div>
      </div>
    </>
  );
};
