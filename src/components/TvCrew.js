import { useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

const TvCrew = ({ creator }) => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiTvCrew = api.get(`tv/${movieid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvCrew;
      setData(response.data.crew);
    };
    data();
  }, []);

  console.log("tv crew", data);

  return (
    <ul className="credit-crew">
      {(data.length < 30 &&
        data.map((crew) => {
          return (
            <>
              <li>
                <h4>{crew.name}</h4>
                <p>{crew.job}</p>
              </li>
            </>
          );
        })) ||
        ((!data.length || data.length > 30) &&
          creator.map((creator) => {
            return (
              <>
                <li>
                  <h4>{creator.name}</h4>
                  <p>Creator</p>
                </li>
              </>
            );
          }))}
    </ul>
  );
};
export default TvCrew;
