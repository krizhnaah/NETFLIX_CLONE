import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

export const TvShowLatest = () => {
  const [data, setData] = useState({});
  const apiTvShowLatest = api.get("/tv/latest", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvShowLatest;
      setData(response.data);
    };
    data();
  }, []);

  console.log("Tv show latest", data);

  return (
    <>
      <div>Tv Show</div>
    </>
  );
};
