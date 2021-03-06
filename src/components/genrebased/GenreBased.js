import { useEffect, useState } from "react";
import api, { api_key } from "../../axios";
import { useParams } from "react-router-dom";
import { Movies } from "../../Movies";
import { TvShows } from "../TvShows";

const GenreBasedMovie = () => {
  const { moviegenre } = useParams();
  const [data, setData] = useState([]);
  const apiGenreBased = api.get(`/discover/movie?with_genres=${moviegenre}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiGenreBased;
      setData(response.data.results);
    };
    data();
  }, [moviegenre]);

  return (
    <>
      <div className="page-container">
        <Movies movieArray={data} />
      </div>
    </>
  );
};

export default GenreBasedMovie;

export const GenreBasedTV = () => {
  const { tvgenre } = useParams();
  const [data, setData] = useState([]);
  const apiGenreBased = api.get(`/discover/tv?with_genres=${tvgenre}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiGenreBased;
      setData(response.data.results);
    };
    data();
  }, [tvgenre]);

  return (
    <>
      <div className="page-container">
        <TvShows movieArray={data} />
      </div>
    </>
  );
};
