import React from "react";
import ReactDOM from "react-dom/client";
import MyLoader from "./loader";

/**
 * Header
 *  - Logo
 *  - Navigation
 * Body
 *  - Search
 *  - RestaurantList
 *      - RestaurantCards
 * Footer
 *  -Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/eDigital-logo-115x65-1.png"
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const RestaurantCard = (props) => {
    const {name, rating, location, priceForTwo, openedTill, maxDeliveryTime} = props?.resData;
    return (
        <div className="restaurant-card">
            <img
                src="https://imgs.search.brave.com/KYg5E_GewM2s_CNnZNfXxwafDFykhSOwevimy2Mof20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRGwybjEx/UTBZX1ZLaDEzT2R5/OGpialFsZlJYV19D/Ty12ZWo2NjlFYXc1/MC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/RTEvT0RZeU16UXdP/Qzl3YUc5MC9ieTlw/Ym1ScFlXNHRhR2x1/L1pIVXRkbVZuTFhS/b1lXeHAvTFdadmIy/UXRjR3hoZEhSbC9j/aTF6Wld4bFkzUnBk/bVV0L1ptOWpkWE11/YW5CblAzTTkvTmpF/eWVEWXhNaVozUFRB/bS9hejB5TUNaalBV/MVBiVE56L1prbG1U/REl5VlZKV05tcDEv/VTBONGNFRXplV1p5/TkU4Mi9NM2xLVlZZ/MWRtbDBkV1pTL04x/azk"
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

const resList = [
    {
        id: 1,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 2,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 3,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 4,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 5,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 6,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 7,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 8,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 9,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 10,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 11,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 12,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 13,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 14,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 15,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 16,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 17,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 18,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 19,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 20,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
    {
        id: 21,
        name: "Milan",
        location: "Sector-10, Faridabad Haryana, 121004",
        distanceFromCurrentLocation: "1.4 km",
        rating: 4,
        maxDeliveryTime: 30,
        openedTill: "12 noon",
        priceForTwo: "$1200",
    },
];
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    resList.map((restaurant) => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <MyLoader size='small'/>
            <Header />
            <Body />
      // Footer
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
