import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
const ResMenu = () => {
  const {resId}=useParams();

  const resInfo=useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("second console");
  console.log(itemCards);
  return (
    <div className="main">
      <div>
        <h1>{name}</h1>
        <h3>
          {cuisines.join(",")}-{costForTwoMessage}
        </h3>
        <h3>Menu</h3>
        {itemCards.map((item) => (
          <li  key={item.card.info.id}>
            {item.card.info.name} -{"Rs "}
            {item.card.info.price || item.card.info.variantsV2.pricingModels[0].price}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
