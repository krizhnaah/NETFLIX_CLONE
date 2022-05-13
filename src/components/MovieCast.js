import { useParams } from "react-router-dom";
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
  }, []);
  return (
    <>
      {data.map((cast) => {
        if (!cast.profile_path) {
          console.log("cast", cast);
        } else {
          return (
            <ul className="movie-cast">
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={cast.character}
                />
              </li>
              <li>
                <p>
                  <b className="actress-name">{cast.name}</b> As{" "}
                  <span className="charector-name">{cast.character}</span>
                </p>
              </li>
            </ul>
          );
        }
      })}
    </>
  );
};

export default MovieCast;
