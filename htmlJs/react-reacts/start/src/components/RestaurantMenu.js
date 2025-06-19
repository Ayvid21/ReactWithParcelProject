import { useState, useEffect } from "react";
import RestaurantStatusCard from './RestaurantStatusCard';
import DealsForYou from "./DealsForYou";
import FoodCategoryType from "./FoodCategoryType";
import Recommendation from "./Recommendation";
import '../../index.css';
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json?.data);
    };

    if (resInfo === null) {
        return <h2>Preloader...</h2>;
    }

    const name = resInfo?.cards?.[0]?.card?.card?.text;
    const tabs = resInfo?.cards?.[1]?.card?.card?.tabs || [];

    console.log("resInfo", resInfo);

    return (
        <div className="menu">
            <h1 className="restaurant-name">{name}</h1>
            <h2 className="orderType">
                {tabs.map((tab, index) => (
                    <span key={tab.id || index} >
                        {tab.cta ? (
                            <a href={tab.cta} target="_blank" rel="noreferrer">{tab.title}</a>
                        ) : (
                            tab.title
                        )}
                        {index < tabs.length - 1 && " | "}
                    </span>
                ))}
            </h2>
            <RestaurantStatusCard data={resInfo?.cards?.[2]} />
            <DealsForYou data={resInfo?.cards?.[3]} />
            <div className="menu-text">Menu</div>
            <div className="search-dishes">
                <input
                    type='text'
                    className='search-box'
                    placeholder='Search for dishes'
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                <button className='search-btn' onClick={() => {}}>Search</button>
            </div>
            <FoodCategoryType data={resInfo?.cards?.[4]} />
            <Recommendation data={resInfo?.cards?.[4]} />
        </div>
    );
};

export default RestaurantMenu;
