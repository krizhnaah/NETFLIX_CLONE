import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../../axios";
import { useEffect, useState } from "react";

const Person = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const apiTvCrew = api.get(`/person/${id}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvCrew;
      setData(response.data);
    };
    data();
  }, []);

  console.log("person ", data);
  return (
    <>
      <div className="person-details-container">
        <div className="person-detail-box">
          <div className="person-image-in-person-details">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
              alt={data.name}
            />
          </div>
          <div className="movie-details">
            <h1>{data.name}</h1>
          </div>
          <div className="biography">
            <h4>Biography</h4>
            <p>{data.biography}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
