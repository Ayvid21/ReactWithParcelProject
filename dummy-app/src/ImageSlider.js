import React, { useEffect, useState } from "react";
import "./ImageSilder.css";

const data = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1734443837628-d5a0124a3846?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734879349998-3a675a016db9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737730511213-f558d973b0b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1680995369588-502d70f0e3c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737652423559-e193e9a5d3f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737652423535-c1b0096f9244?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737553338682-cd52f5df9781?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
];
const ImageSlider = () => {
  const [activeImg, setActiveImg] = useState(0);
  const handleNextClick = () => {
    setActiveImg((activeImg + 1) % data.length);
  };
  const handlePreviousClick = () => {
    setActiveImg(!activeImg ? data.length - 1 : activeImg - 1);
  };

  // we always need to do clear settimeout because if u try to change the image by clicking on the button it will crete a new setTime out
  //  for that and because of which the images may visible to be changing fast automatically even without clicking.
  useEffect(() => {
    const timer =  setTimeout( () => {
        handleNextClick() 
    },5000);
    return () => {
        clearTimeout(timer); // when the component unmount the timer should be cleared.
    }
  }, [activeImg]);
  return (
    <div className="slider-main">
      <button onClick={handlePreviousClick}>Previous</button>
      {data.map((url, index) => (
        <img
          src={url}
          alt="images for slider"
          key={url }
          className={activeImg === index ? 'active': 'inactive'}
          style={{ width: "1050px", height: "650px" }}
        />
      ))}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageSlider;
