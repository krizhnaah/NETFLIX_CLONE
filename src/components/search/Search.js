import api, { api_key } from "../../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../../Movies";
import { TvShows } from "../TvShows";

export const MovieSearch = () => {
  const [data, setData] = useState([]);
  const { keyword } = useParams();
  const apiMovieSearch = api.get(`/search/movie?query=${keyword}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiMovieSearch;
      setData(response.data.results);
    };
    data();
  }, [keyword]);

  return (
    <>
      <div className="page-container">
        <h3 className="similar-h3">Search For "{keyword}" On Movies</h3>
        <Movies movieArray={data} />
      </div>
    </>
  );
};

export const TvSearch = () => {
  const [data, setData] = useState([]);
  const { keyword } = useParams();
  const apiTvSearch = api.get(`/search/tv?query=${keyword}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvSearch;
      setData(response.data.results);
    };
    data();
  }, [keyword]);

  return (
    <>
      <div className="page-container">
        <h3 className="similar-h3">Search For "{keyword}" On TvShows</h3>
        <TvShows movieArray={data} />
      </div>
    </>
  );
};
