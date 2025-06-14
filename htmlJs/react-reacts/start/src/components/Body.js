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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    const allCards = json?.data?.cards || [];

    // Filter out cards that contain a restaurant info object
    const filteredResList = allCards
      .map((card) => card?.card?.card?.info)
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

  // if(listOfRestaurant.length === 0) {
  //   return <Preloader />
  // }

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
            console.log(filteredRes)
          }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = listOfRestaurant.filter((res) => {
                const rating = res?.card?.card?.info?.avgRating;
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
