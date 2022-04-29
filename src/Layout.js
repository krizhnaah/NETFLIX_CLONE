import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <Header />
    </>
    // <nav>
    //   <ul className="movie-category-list">
    //     <li>
    //       <Link to={"Home"}>Home</Link>
    //     </li>
    //     <li>
    //       <Link to={"MovieFilter"}>Movie List</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};
