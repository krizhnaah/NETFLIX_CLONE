import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import { FirstFewMovie } from "../Movies";

export const UpComingHome = () => {
  const [data, setData] = useState([]);
  const apiUpComing = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpComing;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log(data);

  return (
    <>
      <div className="page-container">
        <FirstFewMovie movieArray={data} />
      </div>
    </>
  );
};
