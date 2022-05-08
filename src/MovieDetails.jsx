import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { movieid } = useParams();
  const [data, setData] = useState({});
  const apiMovieDetail = api.get(`movie/${movieid}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiMovieDetail;
      setData(response.data);
    };
    data();
  }, [movieid]);

  console.log("movie Id", data);

  return (
    <>
      <div className="movie-details-container">
        <div
          className="movie-detail-box"
          style={{
            background: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            width: "100vw",
          }}
        >
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div>
            <div>
              <div>
                <h4>{data.title}</h4>
              </div>
              <div>
                {/* {data.genres.map((genre) => {
                  return <div>{genre.name}</div>;
                })} */}
              </div>
              <div>{data.overview}</div>
              <div>
                {/* {data.spoken_languages.map((lang) => {
                  return <div>{lang.english_name}</div>;
                })} */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MovieDetails;
