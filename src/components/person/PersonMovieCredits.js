import api, { api_key } from "../../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PersonMovieTvList } from "./PersonMovieTvList";

export const PersonMovieCastCredits = () => {
  const [data, setData] = useState();
  const { personid } = useParams();
  const apiPersonMovieCastCredits = api.get(
    `/person/${personid}/movie_credits`,
    {
      params: { api_key },
    }
  );

  useEffect(() => {
    const data = async () => {
      const response = await apiPersonMovieCastCredits;
      setData(response.data.cast);
    };
    data();
  }, []);
  return (
    <>
      <PersonMovieTvList movieArray={data} />
    </>
  );
};

export const PersonMovieCrewCredits = () => {
  const [data, setData] = useState();
  const { personid } = useParams();
  const apiPersonMovieCrewCredits = api.get(
    `/person/${personid}/movie_credits`,
    {
      params: { api_key },
    }
  );

  useEffect(() => {
    const data = async () => {
      const response = await apiPersonMovieCrewCredits;
      setData(response.data.cast);
    };
    data();
  }, []);
  return (
    <>
      <PersonMovieTvList movieArray={data} />
    </>
  );
};
