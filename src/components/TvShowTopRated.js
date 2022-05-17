import api, { api_key } from "../axios";
import { TvShows } from "./TvShows";
import { useEffect, useState } from "react";

export const TvShowTopRated = () => {
  const [data, setData] = useState([]);
  const apiTvShowTopRated = api.get("/tv/top_rated", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvShowTopRated;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log("tv top rated", data);

  return (
    <>
      <div className="page-container">
        <TvShows movieArray={data} />
      </div>
    </>
  );
};
