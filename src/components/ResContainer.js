import { IMG_URL } from "../utils/constants";
const ResContainer = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData.info;
  return (
    <div className="m-4 p-4 w-[210px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-photo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>
        {resData.info.sla.deliveryTime} - <span>Mins</span>
      </h4>
    </div>
  );
};

export const openedLabel = (ResContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 px-2 bg-black text-white rounded-lg">Veg Items</label>
        <ResContainer {...props} />
      </div>
    );
  };
};

export default ResContainer;
