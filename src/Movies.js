import { Link } from "react-router-dom";

export const Movies = ({ movieArray }) => {
  console.log("MOvie Array", movieArray);

  return (
    <>
      <div className="movieContainer">
        {movieArray.map((movieObj) => {
          return (
            <Link to={`/Movie/Movie+Details/${movieObj.id}`}>
              <div className="movieBox">
                <div>
                  <img
                    className="image-box"
                    src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                </div>
                <div>{movieObj.title}</div>
                <div className="release-date-lang">
                  <div>{movieObj.release_date}</div>
                  <div>{movieObj.original_language}</div>
                </div>

                <div className="rating">
                  <div>{movieObj.vote_count}</div>
                  <div>{movieObj.vote_average}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export function FirstFewMovie({ movieArray }) {
  console.log(movieArray);
  return (
    <div className="movieContainer-for-home">
      {movieArray.map((movieObj) => {
        return (
          <div className="movieBox">
            <div>
              <img
                className="image-box"
                src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                alt={movieObj.title}
              />
            </div>
            <div>{movieObj.title}</div>
            <div>{movieObj.release_date}</div>
            <div>{movieObj.original_language}</div>
            <div>{movieObj.vote_count}</div>
            <div>{movieObj.vote_average}</div>
          </div>
        );
      })}
    </div>
  );
}
