import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import { Movies } from "./Movies";

export const Popular = () => {
  const [data, setData] = useState([]);
  const apiPopular = api.get("movie/popular", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiPopular;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log(data);

  return (
    <>
      <div className="page-container">
        <Movies movieArray={data} />
      </div>
    </>
  );
};
