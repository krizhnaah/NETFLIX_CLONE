import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import { FirstFewMovie } from "../Movies";
import { Link } from "react-router-dom";

export const PopularHome = () => {
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
        <div>
          <FirstFewMovie movieArray={data} />
        </div>
        <div>
          <Link to={"/Movie/Popular"}>
            <span className="load-more-button">Load More</span>
          </Link>
        </div>
      </div>
    </>
  );
};
