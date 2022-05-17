// import { useState, useEffect } from "React";
// import api, { api_key } from "../../../axios";
// import { FirstFewMovie } from "../../../Movies";

// export const RelatedMovies = ({ movie_id }) => {
//   const [data, setData] = useState([]);
//   //   const { movieid } = useParams();

//   const apiRelatedMovies = api.get(`/movie/${movie_id}/similar`, {
//     params: { api_key },
//   });

//   useEffect(() => {
//     const data = async () => {
//       const response = await apiRelatedMovies;
//       setData(response.data.results);
//     };
//     data();
//   }, []);

//   return (
//     <>
//       <div className="page-container">
//         <div>
//           <FirstFewMovie movieArray={data} />
//         </div>
//       </div>
//     </>
//   );
// };
