import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResturantCategory from "./ResturantCategory";
const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(
  //   "second console",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCards);
  return (
    <div className="text-center">
      <div className="">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h3 className="font-bold">
          {cuisines.join(",")}-{costForTwoMessage}
        </h3>
      </div>
      <div>
       { categories.map((category) => <ResturantCategory data={category.card.card}/>)}
      </div>
    </div>
  );
};

export default ResMenu;
