import { useState } from 'react'

const Recommendation = (data) => {
  // console.log("Recommendation", data)

  const recommendCards = data?.data?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2];
  const itemsList = recommendCards?.card?.card?.itemCards || [];
  const title = recommendCards?.card?.card?.title;
  const lengthOfItems = itemsList.length;
  const [quantities, setQuantities] = useState({});

  return (
    <div className="recommend-container">
      <div className="recommend-title">{title} ({lengthOfItems})</div>
      <div className="recommend-cards">
        {itemsList.map((item, index) => {
          const {
            name,
            defaultPrice,
            price,
            description,
            id,
            ratings,
            itemAttribute,
          } = item?.card?.info || {};

          const quantity = quantities[id] || 0;

          const handleAdd = () => {
            setQuantities(prev => ({ ...prev, [id]: 1 }));
          };

          // Increase count
          const handlePlus = () => {
            setQuantities(prev => ({ ...prev, [id]: quantity + 1 }));
          };

          // Decrease count
          const handleMinus = () => {
            if (quantity === 1) {
              const updated = { ...quantities };
              delete updated[id];
              setQuantities(updated);
            } else {
              setQuantities(prev => ({ ...prev, [id]: quantity - 1 }));
            }
          };
          return (
            <div className="recommend-card" key={id || index}>
              <div className="recommend-card-food-category" style={{
                color: itemAttribute?.vegClassifier === 'VEG' ? '#03aa59' : '#f7154a',
                fontWeight: 'bold'
              }}>{typeof itemAttribute?.vegClassifier == 'string' ? itemAttribute.vegClassifier : JSON.stringify(itemAttribute?.vegClassifier)}</div>
              <div className="recommend-info">
                <div className="recommend-info-data">
                  <div className="recommend-info-data-name">{name}</div>
                  <div className="recommend-card-price">₹{Math.ceil((defaultPrice || price || 0) / 100)}</div>
                  {ratings?.aggregatedRating?.rating && (
                    <div className="recommend-rating">
                      <span className="green-star">★</span> {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCount})
                    </div>
                  )}
                  <div className="recommend-info-data-description">{description}</div>
                </div>
                {quantity === 0 ? (
                  <button className="add-btn" onClick={handleAdd}>ADD</button>
                ) : (
                  <div className="counter-btn">
                    <button onClick={handleMinus} className="count-btn">-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlus} className="count-btn">+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Recommendation