import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";
import useBodyData  from '../utils/useBodyData';
import useOnlineStatus  from '../utils/useOnlineStatus';


const Body = () => {
  const [ searchText, setSearchText ] = useState("");
  const [ hasSearched, setHasSearched ] = useState(false);
  const { listOfRestaurant, setListOfRestaurant, filteredRestaurant, setFilteredRestaurant } = useBodyData();
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
      <div className="status">
        <h3 className="offline">Please check your internet connection!</h3>
      </div>
    )
  }

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
