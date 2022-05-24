import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");

  function handleSeacrch() {
    let headerForm = document.getElementById("header-form");

    if (headerForm.style.display === "flex") {
      headerForm.style.display = "none";
    } else {
      headerForm.style.display = "flex";
    }
  }

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
            <FaSearch className="search-icon" onClick={handleSeacrch} />

            <form id="header-form">
              <input
                className="header-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ENTER HERE TO SEARCH ......."
              />

              <span>
                <Link
                  to={`/search/${search}`}
                  className="search-btn"
                  onClick={() => setSearch("")}
                >
                  <input type="submit" value="Search" />
                </Link>
              </span>
            </form>
          </div>
          <div className="profile">
            <span>Profile</span>
          </div>
        </div>
      </nav>
    </>
  );
};
