import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiMovieCast = api.get(`movie/${movieid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiMovieCast;
      setData(response.data.cast);
    };
    data();
  }, [movieid]);

  return (
    <>
      {data.length > 0 && (
        <>
          <h3 className="similar-h3">Cast</h3>
          <div className="casting-crew">
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
                        <span className="charector-name">
                          {" "}
                          {"(As)"} {cast.character}
                        </span>
                      )}
                    </p>
                  </li>
                </ul>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MovieCast;
