import ResContainer from "./ResContainer";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfResturants, setlistofResturants] = useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const res = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofResturants(res);
          }}
        >
          Top Rated Resturants.
        </button>
        <button
          onClick={() => {
            const res1 = listOfResturants.filter(
              (res) => res.info.avgRating > 3 && res.info.avgRating <= 4 
            );
            setlistofResturants(res1);
          }}
        >
          Medium Ranged Resturants.
        </button>
      </div>
      <div className="resturant-conatiner">
        {listOfResturants.map((resturant) => (
          <ResContainer key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
