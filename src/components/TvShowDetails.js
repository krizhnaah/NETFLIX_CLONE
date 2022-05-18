import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import { useEffect, useState } from "react";
import MovieCast from "./MovieCast";
import MovieCrew from "./MovieCrew";
import TvCast from "./TvCast";
import TvCrew from "./TvCrew";
import { SimilarTvShow } from "./movies/related_movies/tv/similar/SimilarTvShow";

const TvShowDetails = () => {
  const { tvid } = useParams();
  const [data, setData] = useState({});
  const apiTvShowDetails = api.get(`tv/${tvid}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvShowDetails;
      setData(response.data);
    };
    data();
  }, []);

  // const data1 = async () => {
  //   const response = await apiMovieDetail;
  //   console.log("response.data", response.data);
  //   setData(response.data);
  // };
  // console.log("calling the data function");
  // data1();
  // useEffect(() => {
  //   console.log("Inside useEffect");
  // }, []);
  // if (!data1) return <div>Loading..</div>;

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
                          <Link to={`/tvshow/${genre.name}`}>{genre.name}</Link>
                        </li>
                      );
                    })}
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
              {<TvCrew creator={data.created_by} />}
            </div>
          </div>
        </div>
        <div className="casting-crew">
          <TvCast />
        </div>
        <div>
          <SimilarTvShow />
        </div>
      </div>
      ;
    </>
  );
};

export default TvShowDetails;
