import { Link } from "react-router-dom";

export const Movies = ({ movieArray }) => {
  // console.log("MOvie Array", movieArray);

  return (
    <>
      <div className="movieContainer">
        {movieArray.map((movieObj) => {
          return (
            <div className="movieBox">
              <div>
                <Link to={`/movie/movie-detail/${movieObj.id}`}>
                  <div>
                    {(movieObj.poster_path && (
                      <img
                        className="image-box"
                        src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                        alt={movieObj.title || movieObj.name}
                      />
                    )) ||
                      (!movieObj.poster_path && (
                        <img
                          className="image-box"
                          src={require("./Images/movie-tv-default.jpg")}
                          alt={movieObj.title || movieObj.name}
                        />
                      ))}
                  </div>
                </Link>
              </div>
              <div className="movie-name">
                <Link to={`/movie/movie-detail/${movieObj.id}`}>
                  <div className="movie-title">
                    {movieObj.title || movieObj.name}
                  </div>

                  <div className="lang">
                    <Lang movieLang={movieObj.original_language} />
                  </div>
                </Link>
              </div>
              <div className="movie-quick-details">
                <div className="rating">
                  <div className="vote-count">
                    Vote&#160;&#58;&#160;{movieObj.vote_count}
                  </div>
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
  return (
    <div className="movieContainer-home">
      {movieArray.map((movieObj) => {
        return (
          <div className="movieBox">
            <div>
              <Link to={`/movie/movie-detail/${movieObj.id}`}>
                <div>
                  {(movieObj.poster_path && (
                    <img
                      className="image-box"
                      src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                      alt={movieObj.title || movieObj.name}
                    />
                  )) ||
                    (!movieObj.poster_path && (
                      <img
                        className="image-box"
                        src={require("./Images/movie-tv-default.jpg")}
                        alt={movieObj.title || movieObj.name}
                      />
                    ))}
                </div>
              </Link>
            </div>
            <div className="movie-name">
              <Link to={`/movie/movie-detail/${movieObj.id}`}>
                <div className="movie-title">
                  {movieObj.name || movieObj.title}
                </div>

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

export function SimilarMovieMap({ movieArray }) {
  return (
    <div className="movieContainer-similar">
      {movieArray.map((movieObj) => {
        return (
          <div className="movieBox--similar">
            <div>
              <Link to={`/movie/movie-detail/${movieObj.id}`}>
                <div>
                  {(movieObj.poster_path && (
                    <img
                      className="image-box"
                      src={`https://image.tmdb.org/t/p/w300/${movieObj.poster_path}`}
                      alt={movieObj.title || movieObj.name}
                    />
                  )) ||
                    (!movieObj.poster_path && (
                      <img
                        className="image-box"
                        src={require("./Images/movie-tv-default.jpg")}
                        alt={movieObj.title || movieObj.name}
                      />
                    ))}
                </div>
              </Link>
            </div>
            <div className="movie-title">{movieObj.name || movieObj.title}</div>
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
    case "sv":
      return "Swedish";
    case "pt":
      return "Portuguese";
    case "tl":
      return "Tagalog";
    case "zh":
      return "Mandarin";
    case "nl":
      return "Dutch";
    case "ms":
      return "Malay";
    case "ml":
      return "Malay";
    case "sk":
      return "Slovak";
    default:
      return movieLang;
  }
};
