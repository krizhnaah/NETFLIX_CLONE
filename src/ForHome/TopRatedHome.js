import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import { FirstFewMovie } from "../Movies";
import { Link } from "react-router-dom";

export const TopRatedHome = () => {
  const [data, setData] = useState([]);
  const apiUpTopRated = api.get("movie/top_rated", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpTopRated;
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
          <Link to={"/Movie/TopRated"}>
            <span>Load More</span>
          </Link>
        </div>
      </div>
    </>
  );
};
