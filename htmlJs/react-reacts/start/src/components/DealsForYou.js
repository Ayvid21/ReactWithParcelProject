import { DEALS_FOR_YOU } from "../utils/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {useRef} from 'react';

const DealsForYou = (data) => {
  const offers = data?.data?.card?.card?.gridElements?.infoWithStyle?.offers;
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };
  
  // console.log("deals", data)
  // console.log(offers?.[0]?.info)
  return (
    <div className="deals-container">
      <div className="deals-header">
        <div className="deals-title">{DEALS_FOR_YOU}</div>
        <div className="carousel">
          <button className="left-btn" onClick={scrollLeft}><FaChevronLeft /></button>
          <button className="right-btn" onClick={scrollRight}><FaChevronRight /></button>
        </div>
      </div>
      <div className="deals-card-container" ref={carouselRef}>
        {offers.map((item, index) => {
          return (
            <div className="deals-card" key={index} >
              <div className="deals-card-header">{item.info.header}</div>
              {item.info?.couponCode ? (
              <div className="deals-coupon-code">{item.info.couponCode}</div>
            ) : (
              <div className="deals-coupon-code">XXXX</div>
            )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DealsForYou