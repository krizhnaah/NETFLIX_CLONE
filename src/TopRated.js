import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import { Movies } from "./Movies";

export const TopRated = () => {
  const [data, setData] = useState([]);
  const apiTopRated = api.get("movie/top_rated", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiTopRated;
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
