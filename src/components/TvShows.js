import { Link } from "react-router-dom";

export const TvShows = ({ movieArray }) => {
  // console.log("MOvie Array", movieArray);

  return (
    <>
      <div className="movieContainer">
        {movieArray.map((tvshowObj) => {
          return (
            <div className="movieBox">
              <div>
                <Link to={`/tvshow/show-detail/${tvshowObj.id}`}>
                  <div>
                    <img
                      className="image-box"
                      src={`https://image.tmdb.org/t/p/w300/${tvshowObj.poster_path}`}
                      alt={tvshowObj.name}
                    />
                  </div>
                </Link>
              </div>
              <div className="movie-name">
                <Link to={`/movie/movie-detail/${tvshowObj.id}`}>
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
  // console.log(movieArray);

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
                    alt={movieObj.title || movieObj.name}
                  />
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
