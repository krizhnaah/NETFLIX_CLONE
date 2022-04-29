import { Link, Outlet } from "react-router-dom";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { UpComing } from "./UpComing";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-cetegory-wrapper">
          <div className="logo-img">
            <Link to={"/"}>
              <img src="./Images/netflix_full_name.jpg" alt="netflix"></img>
            </Link>
          </div>
          <div className="category">
            <ul className="category-list">
              <li>
                <Link to={"/"}>TV SHOW</Link>
              </li>
              <ul>
                <li>
                  <Link to={"/"}>Tv Seasons</Link>
                </li>
                <li>
                  <Link to={"/"}>Tv Episodes</Link>
                </li>
              </ul>
              <li>
                <Link to={"/"}>MOVIE</Link>
              </li>
              <ul>
                <li>
                  <Link to={"/Movie/NowPlaying"}>Now Playing</Link>
                </li>
                <li>
                  <Link to={"/Movie/UpComing"}>Up Coming</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/Movie/Popular"}>Popular</Link>
                </li>
                <li>
                  <Link to={"/Movie/TopRated"}>Top Rated</Link>
                </li>
              </ul>
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
      </div>
      <Outlet />
    </>
  );
};
