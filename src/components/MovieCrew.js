import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

const MovieCrew = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiMovieCrew = api.get(`movie/${movieid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiMovieCrew;
      setData(response.data.crew);
    };
    data();
  }, []);
  return (
    <ul className="credit-crew">
      {(data.length < 30 &&
        data.map((crew) => {
          return (
            <>
              <li>
                <Link to={`/credit/${crew.credit_id}`}>
                  <h4>{crew.name}</h4>
                </Link>
                <p>{crew.job}</p>
              </li>
            </>
          );
        })) ||
        ((!data.length || data.length > 30) &&
          data
            .filter(
              (crew) =>
                crew.department.includes("Writing") ||
                crew.department.includes("Directing")
            )
            .map((crew) => {
              return (
                <>
                  <li>
                    <Link to={`/credit/${crew.credit_id}`}>
                      <h4>{crew.name}</h4>
                    </Link>
                    <p>{crew.job}</p>
                  </li>
                </>
              );
            }))}
    </ul>
  );
};
export default MovieCrew;
