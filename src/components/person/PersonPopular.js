import api, { api_key } from "../../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PersonPopular = () => {
  const { data, setData } = useState();

  const apiPersonPopular = api.get(`/person/popular`);

  return <div className="peson-popular"></div>;
};
