import { useParams } from "react-router-dom";
import api, { api_key } from "../../../axios";
import { SimilarMovieMap } from "../../../Movies";
import { useEffect, useState } from "react";

export const SimilarMovies = () => {
  const [data, setData] = useState([]);
  const movie = useParams();
  const apiSimilarMoviesg = api.get(`movie/${movie.movieid}/similar`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiSimilarMoviesg;
      setData(response.data.results);
    };
    data();
  }, [movie.movieid]);

  return (
    <>
      {data?.length > 0 && (
        <div className="related-container">
          <div>
            <h3 className="similar-h3">Recommended For You</h3>
          </div>
          <SimilarMovieMap movieArray={data} />
        </div>
      )}
    </>
  );
};
