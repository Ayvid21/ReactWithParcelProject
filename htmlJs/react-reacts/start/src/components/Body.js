import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { HOME_PAGE_LISTING_RESTAURANTS_NEW } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (text) => {
    const trimmed = text.trim();
    if (trimmed === "") {
      setFilteredRestaurant(listOfRestaurant);
      setHasSearched(false);
    } else {
      const filteredRes = listOfRestaurant.filter((res) =>
        res.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredRes);
      setHasSearched(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_PAGE_LISTING_RESTAURANTS_NEW);

    const json = await data.json();
    const cardData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Filter out cards that contain a restaurant info object
    const filteredResList = cardData.map((card) => card?.info)
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
              const text = e.target.value;
              setSearchText(text);

              // Live filter only if a search was already triggered
              if (hasSearched) {
                handleSearch(text);
              }

              // If search is cleared, reset everything
              if (text.trim() === "") {
                setFilteredRestaurant(listOfRestaurant);
                setHasSearched(false);
                return;
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(searchText);
              }
            }}
          />
          <button className='search-btn' onClick={() => {
            handleSearch(searchText);
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
          <Link to={"/restaurant/" + restaurant?.id} key={restaurant?.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
