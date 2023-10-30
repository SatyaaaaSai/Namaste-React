import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResMenu = () => {
    const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=353030"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { items } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  console.log(items);
  return (
    <div className="main">
      <div>
        <h1>{name}</h1>
        <h3>
          {cuisines.join(",")}-{costForTwoMessage}
        </h3>
        <h3>Menu</h3>
        <p>{items?.categories[0].itemcards[0]?.card?.info?.name}</p>
         <p>{resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards[0].card.info.name}</p> 
      </div>
    </div>
  );
};

export default ResMenu;
