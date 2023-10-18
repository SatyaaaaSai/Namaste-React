import ResContainer from "./ResContainer";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfResturants, setlistofResturants] = useState([])

  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData = async ()=>{
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   // const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json= await data.json();
  
   setlistofResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setlistofResturants(json.data.cards)
  console.log(json);

  }

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
