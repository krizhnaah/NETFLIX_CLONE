import { Link, useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import MovieCast from "./components/MovieCast";
import MovieCrew from "./components/MovieCrew";
import { SimilarMovies } from "./components/movies/related_movies/SimilarMovies";

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

  let hour = Math.floor(data.runtime / 60);
  let minutes = data.runtime % 60;

  console.log("movie Id", data);

  return (
    <>
      <div className="movie-details-container">
        <div
          className="movie-detail-box"
          style={{
            background: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path}),rgba(0,0,0,0.7)`,
            backgroundBlendMode: "multiply",
            width: "calc(100vw-10px)",
          }}
        >
          <div className="poster-image-in-movie-details">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="movie-details">
            <div>
              <div>
                <h1>{data.title || data.name}</h1>
              </div>
              <ul className="movie-name-with-quickdetails">
                <li>{data.release_date}</li>
                <li className="genres-list">
                  {data.genres?.length > 0 &&
                    data.genres.map((genre) => {
                      return (
                        <li className="btn">
                          <Link to={`/movies/${genre.id}`}>{genre.name}</Link>
                        </li>
                      );
                    })}
                </li>
                <li>
                  {hour}h{" " + minutes}m
                </li>
              </ul>
            </div>

            <div>{data.tagline}</div>
            <div>
              <div>
                <h3>Overview</h3>
              </div>
              <div>{data.overview}</div>
            </div>
            <div>
              {data.spoken_languages?.length > 0 &&
                data.spoken_languages.map((lang) => {
                  return <div>{lang.english_name}</div>;
                })}
            </div>
            <div className="movie-crew">
              <MovieCrew creator={data.created_by} />
            </div>
          </div>
        </div>
        <div>
          <MovieCast />
        </div>
        <div>
          <SimilarMovies />
        </div>
      </div>
      ;
    </>
  );
};

export default MovieDetails;
