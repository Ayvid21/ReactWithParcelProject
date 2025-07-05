import { useState, useEffect } from "react";
import { HOME_PAGE_LISTING_RESTAURANTS_NEW } from "../utils/constants";

const useBodyData = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(HOME_PAGE_LISTING_RESTAURANTS_NEW);
        const json = await data.json();
        
        const cardData =
        json?.data?.cards?.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

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

    return {
        listOfRestaurant,
        setListOfRestaurant,
        filteredRestaurant,
        setFilteredRestaurant,
    };
}

export default useBodyData;