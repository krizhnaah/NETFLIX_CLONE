import { Link } from "react-router-dom";

export const Movies = ({ movieArray }) => {
  console.log("MOvie Array", movieArray);

  return (
    <>
      <div className="movieContainer">
        {movieArray.map((movieObj) => {
          return (
            <div className="movieBox">
              <div>
                <Link to={`/movie/movie-detail/${movieObj.id}`}>
                  <div>
                    <img
                      className="image-box"
                      src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to={`/movie/movie-detail/${movieObj.id}`}>
                  <div className="movie-title">{movieObj.title}</div>

                  <div className="lang">
                    <Lang movieLang={movieObj.original_language} />
                  </div>
                </Link>
              </div>
              <div className="movie-quick-details">
                <div className="rating">
                  <div>Vote&#160;&#58;&#160;{movieObj.vote_count}</div>
                  <div className="vote-avarage">{movieObj.vote_average}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export function FirstFewMovie({ movieArray }) {
  console.log(movieArray);

  return (
    <div className="movieContainer-home">
      {movieArray.map((movieObj) => {
        return (
          <div className="movieBox">
            <div>
              <Link to={`/movie/movie-detail/${movieObj.id}`}>
                <div>
                  <img
                    className="image-box"
                    src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/movie/movie-detail/${movieObj.id}`}>
                <div className="movie-title">{movieObj.title}</div>

                <div className="lang">
                  <Lang movieLang={movieObj.original_language} />
                </div>
              </Link>
            </div>
            <div className="movie-quick-details">
              <div className="rating">
                <div>Votes&#160;&#58;&#160;{movieObj.vote_count}</div>
                <div className="vote-avarage">{movieObj.vote_average}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Lang = ({ movieLang }) => {
  switch (movieLang) {
    case "en":
      return "English";
    case "hi":
      return "Hindi";
    case "ja":
      return "Japanese";
    case "es":
      return "Spanish";
    case "th":
      return "Thai";
    case "fr":
      return "French";
    case "da":
      return "Danish";
    case "pl":
      return "Polish";
    case "ko":
      return "Korean";
    default:
      return movieLang;
  }
};
