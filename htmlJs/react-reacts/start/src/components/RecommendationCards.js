import { useState } from 'react';
import QuantityButton from './QuantityButton';
import { CARD_IMG, TEMP_CARD_IMG } from '../utils/constants';

const RecommendationCards = ({ itemsList, index }) => {
    const [quantities, setQuantities] = useState({});

    return (
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
                    imageId
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
                            <div class="food-image-container">
                                <img src={imageId ? CARD_IMG + imageId : TEMP_CARD_IMG} className="food-image" />
                                <QuantityButton quantity={quantity} handleAdd={handleAdd} handlePlus={handlePlus} handleMinus={handleMinus} />
                            </div>
                            {/* <img src={imageId ? CARD_IMG + imageId : TEMP_CARD_IMG} className="food-image" />
                            <QuantityButton quantity={quantity} handleAdd={handleAdd} handlePlus={handlePlus} handleMinus={handleMinus} /> */}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default RecommendationCards;