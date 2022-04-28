import { Link, Outlet } from "react-router-dom";

export const MovieFilter = () => {
  return (
    <div className="movie-filter">
      <ul>
        <li>
          <Link to={"NowPlaying"}>NOW PLAYING</Link>
        </li>
        <li>
          <Link to={"UpComing"}>UP COMING</Link>
        </li>
        <li>
          <Link to={"TopRated"}>TOP RATED</Link>
        </li>
        <li>
          <Link to={"Popular"}>POPULAR</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
