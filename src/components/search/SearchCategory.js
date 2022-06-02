import { Link, useParams } from "react-router-dom";

const SearchCategory = () => {
  const { keyword } = useParams();

  return (
    <div className="search-category">
      <h3>Search Results</h3>
      <div>
        <ul className="sear-results">
          <li>
            <Link to={`/search/${keyword}/all`}>All</Link>
            <span>count</span>
          </li>
          <li>
            <Link to={`/search/${keyword}/movies/${keyword}`}>Movies</Link>
            <span>count</span>
          </li>
          <li>
            <Link to={`/search/${keyword}/tv/${keyword}`}>Tv</Link>
            <span>count</span>
          </li>
          <li>
            <Link to={`/search/${keyword}/people/${keyword}`}>People</Link>
            <span>count</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchCategory;
