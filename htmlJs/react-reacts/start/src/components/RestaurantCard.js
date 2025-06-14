import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const info = props?.resData?.card?.card?.info || props?.resData;
  // console.log(props?.resData);

  const { name, avgRating, areaName, costForTwo, availability, sla } =
    info || {};
  return (
    <div className="restaurant-card">
      <img src={CARD_IMG} alt="restaurant" />
      <div className="res-data">
        <div className="res-header">
          <div className="res-name">{name}</div>
          <div className="res-star">{avgRating} stars</div>
        </div>
        <div className="res-info">
          <div className="res-location">{areaName}</div>
          <div className="res-price">{costForTwo}</div>
        </div>
        <div className="res-deliveryInfo">
          <div className="res-openTill">
            {availability?.nextCloseTime
              ? `${availability.nextCloseTime}`
              : "Open"}{" "}
          </div>
          <div className="res-subdata">{sla?.deliveryTime} mins</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;