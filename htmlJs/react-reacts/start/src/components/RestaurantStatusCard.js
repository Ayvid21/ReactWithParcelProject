
const RestaurantStatusCard = (data) => {
    // console.log("resStatus", data);

    const info = data?.data?.card?.card?.info;
    const {avgRatingString, totalRatings, costForTwoMessage, cuisines, areaName} = info;
  return (
    <div className="restaurant-status">
      <div className="restaurant-status-card">
        <div className="restaurant-status-card-rating-price">
          <div className="restaurant-status-card-rating">{avgRatingString} ({totalRatings} ratings)</div>
          <div className="restaurant-status-card-rating">{costForTwoMessage}</div>
        </div>
        <div className="restaurant-status-card-info">
          <div className="restaurant-status-card-info-name">{cuisines.map((cuisine, index) => <div key={index} >{cuisine}</div>)}</div>
          <div className="restaurant-status-card-info-outlet-item">
            <div className="restaurant-status-card-info-left-side-img" />
            <div className="restaurant-status-card-info-right-side">
              <div className="restaurant-status-card-info-outlet">Outlet <span>{areaName}</span></div>
              <div className="restaurant-status-card-info-outlet">Closed & not delivering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantStatusCard