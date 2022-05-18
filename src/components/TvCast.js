import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

const TvCast = () => {
  const { tvid } = useParams();
  const [data, setData] = useState([]);
  const apiTvCast = api.get(`tv/${tvid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvCast;
      setData(response.data.cast);
    };
    data();
  }, [tvid]);

  return (
    <>
      {data.map((cast) => {
        return (
          <ul className="movie-cast">
            <li>
              {(cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={cast.character}
                />
              )) ||
                (!cast.profile_path && (
                  <img
                    src={require("../Images/credit-image.png")}
                    alt={cast.character}
                  />
                ))}
            </li>
            <li>
              <p>
                <Link to={`/person/${cast.id}`}>
                  <b className="actress-name">{cast.name}</b>
                </Link>
                {cast.character && (
                  <span className="charecter-name">
                    {" "}
                    {"(As)"} {cast.character}
                  </span>
                )}
              </p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default TvCast;
