import { Link } from "react-router-dom";

export const TvShows = ({ movieArray }) => {
  return (
    <>
      <div className="movieContainer">
        {movieArray.map((tvshowObj) => {
          return (
            <div className="movieBox">
              <div>
                <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                  <div>
                    {(tvshowObj.poster_path && (
                      <img
                        className="image-box"
                        src={`https://image.tmdb.org/t/p/w300/${tvshowObj.poster_path}`}
                        alt={tvshowObj.title || tvshowObj.name}
                      />
                    )) ||
                      (!tvshowObj.poster_path && (
                        <img
                          className="image-box"
                          src={require("../Images/movie-tv-default.jpg")}
                          alt={tvshowObj.title || tvshowObj.name}
                        />
                      ))}
                  </div>
                </Link>
              </div>
              <div className="movie-name">
                <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                  <div className="movie-title">{tvshowObj.name}</div>

                  <div className="lang">
                    <Lang movieLang={tvshowObj.original_language} />
                  </div>
                </Link>
              </div>
              <div className="movie-quick-details">
                <div className="rating">
                  <div className="vote-count">
                    Vote&#160;&#58;&#160;{tvshowObj.vote_count}
                  </div>
                  <div className="vote-avarage">{tvshowObj.vote_average}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export function FirstFewTvShows({ movieArray }) {
  return (
    <div className="movieContainer-home">
      {movieArray.map((tvshowObj) => {
        return (
          <div className="movieBox">
            <div>
              <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                <div>
                  {(tvshowObj.poster_path && (
                    <img
                      className="image-box"
                      src={`https://image.tmdb.org/t/p/w300/${tvshowObj.poster_path}`}
                      alt={tvshowObj.title || tvshowObj.name}
                    />
                  )) ||
                    (!tvshowObj.poster_path && (
                      <img
                        className="image-box"
                        src={require("../Images/movie-tv-default.jpg")}
                        alt={tvshowObj.title || tvshowObj.name}
                      />
                    ))}
                </div>
              </Link>
            </div>
            <div className="movie-name">
              <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                <div className="movie-title">
                  {tvshowObj.name || tvshowObj.title}
                </div>

                <div className="lang">
                  <Lang movieLang={tvshowObj.original_language} />
                </div>
              </Link>
            </div>
            <div className="movie-quick-details">
              <div className="rating">
                <div>Votes&#160;&#58;&#160;{tvshowObj.vote_count}</div>
                <div className="vote-avarage">{tvshowObj.vote_average}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SimilarTvShowMap({ movieArray }) {
  return (
    <div className="movieContainer-similar">
      {movieArray.map((tvshowObj) => {
        return (
          <div className="movieBox--similar">
            <div>
              <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                <div>
                  {(tvshowObj.poster_path && (
                    <img
                      className="image-box-similar"
                      src={`https://image.tmdb.org/t/p/w300/${tvshowObj.poster_path}`}
                      alt={tvshowObj.title || tvshowObj.name}
                    />
                  )) ||
                    (!tvshowObj.poster_path && (
                      <img
                        className="image-box-similar"
                        src={require("../Images/movie-tv-default.jpg")}
                        alt={tvshowObj.title || tvshowObj.name}
                      />
                    ))}
                </div>
              </Link>
            </div>
            <div className="movie-title">
              {tvshowObj.name || tvshowObj.title}
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
