import { Link } from "react-router-dom";

export const PersonMovieTvList = ({ movieArray }) => {
  return (
    <div className="movieContainer-personpage">
      {movieArray?.length > 0 &&
        movieArray.map((movieObj) => {
          return (
            <div className="movieBox--personpage">
              <div>
                <Link to={`/movie/movie-detail/${movieObj.id}`}>
                  <div>
                    {(movieObj.poster_path && (
                      <img
                        className="image-box-personpage"
                        src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                        alt={movieObj.title || movieObj.name}
                      />
                    )) ||
                      (!movieObj.poster_path && (
                        <img
                          className="image-box-personpage"
                          src={require("../../Images/movie-tv-default.jpg")}
                          alt={movieObj.title || movieObj.name}
                        />
                      ))}
                  </div>
                </Link>
              </div>
              <div className="movie-title-personpage">
                {movieObj.name || movieObj.title}
              </div>
            </div>
          );
        })}
    </div>
  );
};
