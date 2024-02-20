import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResturantCategory from "./ResturantCategory";
import Error  from "./Error";
const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useResMenu(resId);

   console.log("resinfo",resInfo);
  // console.log("second console",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  //  cards[0]
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //cards[2]
  console.log(
    "second console",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    if(categories===undefined){
      return <div> {<Error/>}</div>
    }
  console.log(itemCards);
  return (
    <div className="text-center">
      <div className="">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h3 className="font-bold">
          {cuisines.join(",")}-{costForTwoMessage}
        </h3>
      </div>
       <div>
       { categories.map((category,index) => <ResturantCategory key={index} data={category.card.card} showItems={false}/>)}
      </div> 
    </div>
  );
};

export default ResMenu;
