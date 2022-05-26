import { Outlet } from "react-router-dom";
import SearchCategory from "./SearchCategory";

const Result = () => {
  return (
    <div className="page-container result-container">
      <div className="result-search-part">
        <SearchCategory />
      </div>
      <div className="result-result-part">
        <Outlet />
      </div>
    </div>
  );
};

export default Result;
