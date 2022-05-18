import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

const TvCrew = ({ creator }) => {
  const { tvid } = useParams();
  const [data, setData] = useState([]);
  const apiTvCrew = api.get(`tv/${tvid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvCrew;
      setData(response.data.crew);
    };
    data();
  }, [tvid]);

  return (
    <ul className="credit-crew">
      {(data.length < 30 &&
        data.map((crew) => {
          return (
            <>
              <li>
                <Link to={`/person/${crew.id}`}>
                  <h4>{crew.name}</h4>
                </Link>
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
                  <Link to={`/person/${creator.id}`}>
                    <h4>{creator.name}</h4>
                  </Link>
                  <p>Creator</p>
                </li>
              </>
            );
          }))}
    </ul>
  );
};
export default TvCrew;
