import { CARD_IMG, TEMP_CARD_IMG } from "../utils/constants";
import { convertToTwelveHoursFormat as TimeFormatter } from "../utils/helper";

const RestaurantCard = ({ resData }) => {
  const info = resData?.card?.card?.info || resData;

  const { name, avgRating, areaName, costForTwo, availability, sla, cloudinaryImageId } = info || {};
  const imageUrl = CARD_IMG + cloudinaryImageId;

  return (
    <div className="restaurant-card">
      <div className='restaurant-image' >
        {cloudinaryImageId ? (
          <img src={imageUrl} alt="Restaurant image" className='restaurant-card-image' />
        ) : (
          <img src={TEMP_CARD_IMG} alt="Temporary restaurant image" />
        )}
      </div>
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
              ? `${TimeFormatter(availability.nextCloseTime)}`
              : "Open"}{" "}
          </div>
          <div className="res-subdata">{sla?.deliveryTime} mins</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;