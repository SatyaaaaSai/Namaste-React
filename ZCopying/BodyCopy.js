import ResContainer from "./ResContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setlistofResturants] = useState([]);
  const [filteredrestro, setfilteredrestro] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();

    setlistofResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setlistofResturants(json.data.cards)
    console.log(json);
  };

  // if(listOfResturants.length===0){
  //       return( <Shimmer/> );
  // }

  const onlinestatus=useOnlineStaus();

  if (onlinestatus===false) return <h1>"you are offline please check internet connection"</h1>

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="input-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchfilter = listOfResturants.filter((res) => {
              return res.info?.name
                .toLowerCase()
                ?.includes(searchText.toLowerCase());
            });
            //  const filterdrestro = listOfResturants.filter((res) =>  res.info?.name?.includes(searchText));
            setfilteredrestro(searchfilter);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const res = listOfResturants.filter((res) => res.info.avgRating > 4);
          setlistofResturants(res);
        }}
      >
        Top Rated Resturants
      </button>
      <div className="resturant-conatiner">
        {filteredrestro.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            <ResContainer resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
