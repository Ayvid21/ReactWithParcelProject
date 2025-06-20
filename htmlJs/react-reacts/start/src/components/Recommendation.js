import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Recommendation = (data) => {
  const allCards = data?.data?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const [quantities, setQuantities] = useState({});
  const [openItem, setOpenItem] = useState(0);

  const toggleAccordion = (index) => {
    if(openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  }

  if (!allCards || allCards.length === 0) {
        return;
  }

  return (
    <div className="recommend-container">
      {
        allCards.map((cardData, index) => {
          const section = cardData?.card?.card;
          const itemsList = section?.itemCards || [];
          const sectionTitle = section?.title || `Section ${index + 1}`;

          if (!itemsList.length) return null;

          return (
            <div className="recommend-container" key={sectionTitle || index}>
              <div className="recommend-title"
                onClick={() => toggleAccordion(index)}
              >
                  {sectionTitle} ({itemsList.length})
                <button
                  className="toggle-btn"
                  key={index}>
                  {openItem === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {openItem === index && (
                <div className="recommend-cards" key={index}>
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
                        <div className="recommend-card-food-category"
                          style={{
                            color: itemAttribute?.vegClassifier === 'VEG' ? '#03aa59' : '#f7154a',
                            fontWeight: 'bold'
                          }}
                        >
                          {typeof itemAttribute?.vegClassifier === 'string'
                            ? itemAttribute.vegClassifier
                            : JSON.stringify(itemAttribute?.vegClassifier)}
                        </div>
                        <div className="recommend-info">
                          <div className="recommend-info-data">
                            <div className="recommend-info-data-name">{name}</div>
                            <div className="recommend-card-price">
                              ₹{Math.ceil((defaultPrice || price || 0) / 100)}
                            </div>
                            {ratings?.aggregatedRating?.rating && (
                              <div className="recommend-rating">
                                <span className="green-star">★</span>
                                {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCount})
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
              )}
              <div className="separator" />
            </div>
          )
        })
      }
    </div>
  );
};

export default Recommendation;
