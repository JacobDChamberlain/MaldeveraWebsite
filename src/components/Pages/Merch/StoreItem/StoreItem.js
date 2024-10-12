import React, { useState } from "react";
import formatCurrency from "../../../../utilities/formatCurrency";
import './StoreItem.css';
import { useMerchCart } from "../../../../context/MerchCartContext";

export default function StoreItem({ item }) {
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart
    } = useMerchCart();

    const [selectedSize, setSelectedSize] = useState(""); // Track selected size
    const [availableSizes, setAvailableSizes] = useState(item.sizes); // Track available sizes

    const quantity = getItemQuantity(item.id, selectedSize); // Get quantity for selected size

    // Handle size selection
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    // Handle adding to cart and updating size quantity
    const handleAddToCart = () => {
        if (selectedSize) {
            if (availableSizes[selectedSize] > 0) {
                increaseItemQuantity(item.id, selectedSize); // Pass selected size to increaseItemQuantity
                // updateSizeQuantity(item.id, selectedSize, availableSizes[selectedSize] - 1); // Update the JSON quantity for the size
            } else {
                alert("Selected size is out of stock");
            }
        } else {
            alert("Please select a size");
        }
    };

    // Handle removing from cart and updating size quantity
    const handleRemoveFromCart = () => {
        if (selectedSize) {
            removeFromCart(item.id, selectedSize);
            // updateSizeQuantity(item.id, selectedSize, availableSizes[selectedSize] + 1); // Update the JSON quantity for the size
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

                {/* Add to cart or modify cart quantity */}
                {quantity === 0 ? (
                    <button
                        style={{ border: "none", borderRadius: "20px", cursor: "pointer", width: "auto", alignSelf: "center" }}
                        onClick={handleAddToCart}
                    >
                        + Add To Cart
                    </button>
                ) : (
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: ".5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
                            <button
                                onClick={() => decreaseItemQuantity(item.id, selectedSize)}
                                style={{ border: "none", borderRadius: "20px", width: "30px", cursor: "pointer" }}
                            >
                                -
                            </button>
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <button
                                onClick={() => increaseItemQuantity(item.id, selectedSize)}
                                style={{ border: "none", borderRadius: "20px", width: "30px", cursor: "pointer" }}
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={handleRemoveFromCart}
                            style={{
                                backgroundColor: "orangered",
                                borderRadius: "40px",
                                border: "none",
                                color: "white",
                                padding: "5px 10px 5px 10px",
                                cursor: "pointer"
                            }}
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}