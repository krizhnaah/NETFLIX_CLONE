import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <nav>
      <ul className="movie-category-list">
        <li>
          <Link to={"Home"}>Home</Link>
        </li>
        <li>
          <Link to={"MovieFilter"}>Movie List</Link>
        </li>
      </ul>
    </nav>
  );
};
