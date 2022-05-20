import { useParams } from "react-router-dom";
import api, { api_key } from "../../../../../axios";
import { useEffect, useState } from "react";
import { SimilarTvShowMap } from "../../../../TvShows";

export const SimilarTvShow = () => {
  const [data, setData] = useState([]);
  const tv = useParams();
  const apiSimilarTvShow = api.get(`tv/${tv.tvid}/similar`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiSimilarTvShow;
      setData(response.data.results);
    };
    data();
  }, [tv.tvid]);

  return (
    <>
      {data.length > 0 && (
        <div className="related-container">
          <div>
            <h3 className="similar-h3">Recommended For You</h3>
          </div>
          <SimilarTvShowMap movieArray={data} />
        </div>
      )}
    </>
  );
};
