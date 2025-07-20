import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RecommendationCards from './RecommendationCards';

const Recommendation = (data) => {
  const allCards = data?.data?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const [openItem, setOpenItem] = useState(null);

  console.log("Recommendation", data);

  const toggleAccordion = (index) => {
    if (openItem === index) {
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
                <RecommendationCards itemsList={itemsList} index={index} />
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
