import { CARD_IMG } from '../utils/constants';

const RestaurantCard = (props) => {
    const {name, rating, location, priceForTwo, openedTill, maxDeliveryTime} = props?.resData;
    return (
        <div className="restaurant-card">
            <img
                src={CARD_IMG}
                alt="restaurant"
            />
            <div className="res-data">
                <div className="res-header">
                    <div className="res-name">{name}</div>
                    <div className="res-star">{rating} stars</div>
                </div>
                <div className="res-info">
                    <div className="res-location">{location}</div>
                    <div className="res-price">{priceForTwo}</div>
                </div>
                <div className="res-deliveryInfo">
                    <div className="res-openTill">{openedTill} mins</div>
                    <div className="res-subdata">{maxDeliveryTime} mins</div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;