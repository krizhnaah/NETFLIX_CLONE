import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiMovieDetail = api.get(`movie/${movieid}/videos`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiMovieDetail;
      setData(response.data.results);
    };
    data();
  }, [movieid]);

  console.log("movie Id", data);

  return (
    <>
      <div className="movie-details-container">Movie Details {movieid}</div>;
    </>
  );
};

export default MovieDetails;
