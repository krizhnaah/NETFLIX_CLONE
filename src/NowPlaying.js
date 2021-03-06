import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import { Movies } from "./Movies";

export const NowPlaying = () => {
  const [data, setData] = useState([]);
  const apiNowPlaying = api.get("movie/now_playing", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiNowPlaying;
      setData(response.data.results);
    };
    data();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="page-container">
        <Movies movieArray={data} />
      </div>
    </>
  );
};
