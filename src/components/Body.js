import ResContainer,{openedLabel} from "./ResContainer";
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

  console.log(listOfResturants);
  
  //For Higher Order Componets.
  const Opened=openedLabel(ResContainer);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    
    //console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setlistofResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setfilteredrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // setlistofResturants(json.data.cards)
    
  };

  // if(listOfResturants.length===0){
  //       return( <Shimmer/> );
  // }

 //Checking the device is opline or not 
  const onlinestatus = useOnlineStaus();

  if (onlinestatus === false)
    return <h1>"you are offline please check internet connection"</h1>;

  return listOfResturants.length  ===  0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="flex items-center justify-between">
          <input
            type="text"
            className=" p-2 ml-64 w-64 bg-gray-100 text-black-200 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-600"
            placeholder="enter the resturant you want"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="p-2 m-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-sm"
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
        <div className=" flex items-center justify-center">
          <button className=" p-2 ml-16 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-sm"
            onClick={() => {
              const res = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setlistofResturants(res);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredrestro.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
           
            {resturant?.info?.veg ?<Opened resData={resturant}/>:<ResContainer resData={resturant}  />}
            {/* <ResContainer resData={resturant}  */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
