import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const arr = useState(resList);
//   const [listOfRestaurant, setListOfRestaurant] = arr;
  const listOfRestaurant = arr[0];
  const setListOfRestaurant = arr[1];

  return (
    <div className="body">
      <div className="searchFilter">
        <div className="search">Search</div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = listOfRestaurant.filter(
                (res) => res.rating >= 4
              );
              setListOfRestaurant(filteredList)
            }}
          >
            Top Restaurant
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
