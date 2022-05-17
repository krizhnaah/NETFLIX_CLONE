import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="logo-cetegory-wrapper">
          <div className="logo-img">
            <Link to={"/"}>
              <img src={require("./Images/netflix-logo.png")} alt="logo"></img>
            </Link>
          </div>
          <div className="category">
            <ul className="category-list">
              <li>
                <Link to={"/"}>Tv Show</Link>
                <ul className="tv-show-menu">
                  <li>
                    <Link to={"/tvshow/latest"}>Latest</Link>
                  </li>
                  <li>
                    <Link to={"/tvshow/popular"}>Popular</Link>
                  </li>
                  <li>
                    <Link to={"/tvshow/top-rated"}>Top Rated</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>Movie</Link>
                <ul className="movie-menu">
                  <li>
                    <Link to={"/movie/now-playing"}>Popular</Link>
                  </li>
                  <li>
                    <Link to={"/movie/up-coming"}>Top Rated</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/Movie/popular"}>Up Coming</Link>
                  </li>
                  <li>
                    <Link to={"/Movie/top-rated"}>Now Playing</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/"}>Recent</Link>
              </li>
              <li>
                <Link to={"/"}>Trending</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-profile-wrapper">
          <div className="search">
            <span>Search</span>
          </div>
          <div className="profile">
            <span>Profile</span>
          </div>
        </div>
      </nav>
    </>
  );
};
