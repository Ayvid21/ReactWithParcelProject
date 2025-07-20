
const QuantityButton = ({quantity, handleAdd, handlePlus, handleMinus }) => {
    if (quantity === 0) {
        return (
            <button className="add-btn" onClick={handleAdd}>ADD</button>
        );
    }
    return (
        <div className="counter-btn">
            <button onClick={handleMinus} className="count-btn">-</button>
            <span>{quantity}</span>
            <button onClick={handlePlus} className="count-btn">+</button>
        </div>
    );
};

export default QuantityButton;