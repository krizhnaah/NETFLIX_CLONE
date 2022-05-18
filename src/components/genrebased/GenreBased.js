import { useEffect, useState } from "react";
import api, { api_key } from "../../axios";
import { useParams } from "react-router-dom";
import { Movies } from "../../Movies";

const GenreBased = () => {
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

  console.log("genre", data);

  return (
    <>
      <div className="page-container">
        <Movies movieArray={data} />
      </div>
    </>
  );
};

export default GenreBased;
