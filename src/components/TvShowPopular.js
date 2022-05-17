import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import { TvShows } from "./TvShows";

export const TvShowPopular = () => {
  const [data, setData] = useState([]);
  const apiTvShowPopular = api.get("/tv/popular", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvShowPopular;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log("popular", data);

  return (
    <>
      <div className="page-container">
        <TvShows movieArray={data} />
      </div>
    </>
  );
};
