import api, { api_key } from "../../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../../Movies";
import { TvShows } from "../TvShows";
import PersonList from "../person/PersonList";

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
      {data?.length > 0 && (
        <>
          <Movies movieArray={data} />
        </>
      )}
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
      {data?.length > 0 && (
        <>
          <TvShows movieArray={data} />
        </>
      )}
    </>
  );
};

export const PersonSearch = () => {
  const [data, setData] = useState([]);
  const { keyword } = useParams();

  const apiPersonSearch = api.get(`/search/person?query=${keyword}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiPersonSearch;
      setData(response.data.results);
    };
    data();
  }, [keyword]);

  return <>{data?.length && <PersonList data={data} />}</>;
};

export const AllSearch = () => {
  return (
    <>
      <MovieSearch />
      <TvSearch />
      <PersonSearch />
    </>
  );
};
