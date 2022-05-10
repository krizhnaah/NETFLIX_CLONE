import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { movieid } = useParams();
  const [data, setData] = useState({});
  const apiMovieDetail = api.get(`movie/${movieid}`, {
    params: { api_key },
  });
  const data1 = async () => {
    const response = await apiMovieDetail;
    console.log("response.data", response.data);
    setData(response.data);
  };
  console.log("calling the data function");
  data1();
  useEffect(() => {
    console.log("Inside useEffect");
  }, []);
  if (!data) return <div>Loading..</div>;

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
          <div>
            <div>
              <div>
                <h1>{data.title}</h1>
              </div>
              <div>
                {data.genres.map((genre) => {
                  return <div>{genre.name}</div>;
                })}
              </div>
              <div>Release Date {data.release_date}</div>
              <div>{data.tagline}</div>
              <div>
                <div>
                  <h3>Overview</h3>
                </div>
                <div>{data.overview}</div>
              </div>
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
