import React, { useState } from "react";
import formatCurrency from "../../../../utilities/formatCurrency";
import './StoreItem.css';
import { useMerchCart } from "../../../../context/MerchCartContext";

export default function StoreItem({ item }) {
    const {
        increaseItemQuantity
    } = useMerchCart();

    const [selectedSize, setSelectedSize] = useState(""); // Track selected size
    const [availableSizes, setAvailableSizes] = useState(item.sizes); // Track available sizes
    const [itemAdded, setItemAdded] = useState(false); // Track if item is added to cart

    // Handle size selection
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    // Handle adding to cart and updating size quantity
    const handleAddToCart = () => {
        if (selectedSize) {
            if (availableSizes[selectedSize] > 0) {
                increaseItemQuantity(item.id, selectedSize); // Pass selected size to cart
                setItemAdded(true); // Set item added to true
                // Optional: Reset back to "Add to Cart" after a delay
                setTimeout(() => setItemAdded(false), 2000); // Reset after 2 seconds
            } else {
                alert("Selected size is out of stock");
            }
        } else {
            alert("Please select a size");
        }
    };

    return (
        <div className="store-item-wrapper">
            <img className="store-item-image" src={item.images[0]} alt={`${item.description}`} />
            <div className="store-item-info">
                <div className="store-item-name">{item.name.toUpperCase()}</div>
                <div className="store-item-price">{formatCurrency(item.price)}</div>

                {/* Size selection dropdown */}
                <div className="store-item-sizes">
                    <select
                        id={`size-select-${item.id}`}
                        value={selectedSize}
                        onChange={handleSizeChange}
                        className="size-select"
                    >
                        <option className="size-options" value="">🤘Select Size🤘</option>
                        {Object.keys(availableSizes).map((size) => (
                            <option key={size} value={size} disabled={availableSizes[size] === 0}>
                                {size.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Add to cart button with feedback */}
                <button
                    style={{
                        border: "none",
                        borderRadius: "20px",
                        cursor: "pointer",
                        width: "auto",
                        alignSelf: "center",
                        backgroundColor: itemAdded ? "lightgreen" : "white", // Change color if added
                        animation: itemAdded ? "bounce 0.3s ease" : "none" // Add bounce animation if added
                    }}
                    onClick={handleAddToCart}
                    disabled={itemAdded} // Disable button after item is added
                >
                    {itemAdded ? "Item Added!" : "+ Add To Cart"}
                </button>
            </div>
        </div>
    );
}
