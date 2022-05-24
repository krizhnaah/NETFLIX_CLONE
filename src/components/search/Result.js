import { MovieSearch, TvSearch } from "./Search";
import SearchCategory from "./SearchCategory";

const Result = () => {
  return (
    <div className="page-container">
      <SearchCategory />
      <MovieSearch />
      <TvSearch />
    </div>
  );
};

export default Result;
