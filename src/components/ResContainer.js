import { IMG_URL } from "../utils/constants";
const ResContainer = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-photo"
        alt="res-photo"
        src={ IMG_URL  + resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default ResContainer;
