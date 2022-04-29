import { UpComingHome } from "./ForHome/UpcomingHome";
import { TopRatedHome } from "./ForHome/TopRatedHome";
import { FirstFewMovie } from "./Movies";

export const Home = () => {
  return (
    <>
      <div>
        <div className="now-streaming-wrap">
          <div>
            <h3>Now Streaming</h3>
          </div>
          <div>
            <UpComingHome />
          </div>
        </div>
        <div className="upcoming-wrap">
          <div>
            <h3>Up Coming Movies</h3>
          </div>
          <div>
            <UpComingHome />
          </div>
        </div>{" "}
        <div className="popular-wrap">
          <div>
            <h3>Popular</h3>
          </div>
          <div>
            <UpComingHome />
          </div>
        </div>{" "}
        <div className="top-rated-wrap">
          <div>
            <h3>Top Rated</h3>
          </div>
          <div>
            <TopRatedHome />
          </div>
        </div>
      </div>
    </>
  );
};
