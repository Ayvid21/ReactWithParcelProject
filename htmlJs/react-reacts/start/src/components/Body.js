import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const cardData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Filter out cards that contain a restaurant info object
    const filteredResList = cardData
      .map((card) => card?.info)
      .filter(
        (info) =>
          info?.id &&
          info?.name &&
          info?.cloudinaryImageId &&
          info?.avgRating &&
          info?.costForTwo
      );

    setListOfRestaurant(filteredResList);
    setFilteredRestaurant(filteredResList);
  };

  return (listOfRestaurant.length === 0) ? <Preloader /> : (
    <div className="body">
      <div className="searchFilter">
        <div className="search">
          <input type='text' className='search-box'
            placeholder='Search here'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }} />
          <button className='search-btn' onClick={() => {
            console.log(searchText)
            const filteredRes = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRes);
          }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = listOfRestaurant.filter((res) => {
                const rating = res?.avgRating;
                return parseFloat(rating) >= 4.5;
              });
              setListOfRestaurant(filteredList);
            }}
          >
            Top Restaurant
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
