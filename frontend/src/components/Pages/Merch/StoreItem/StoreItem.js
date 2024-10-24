import React, { useState } from "react";
import formatCurrency from "../../../../utilities/formatCurrency";
import './StoreItem.css';
import { useMerchCart } from "../../../../context/MerchCartContext";
import { Button, Modal } from "react-bootstrap";

export default function StoreItem({ item, allItems }) {
    const { increaseItemQuantity } = useMerchCart();
    const [selectedSize, setSelectedSize] = useState("");
    const [itemAdded, setItemAdded] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // Get all sizes for this style
    const relatedItems = allItems.filter(i => i.name.split(' - ')[0] === item.name.split(' - ')[0]);
    const availableSizes = relatedItems.reduce((sizes, currentItem) => {
        sizes[currentItem.size] = currentItem.quantity;
        return sizes;
    }, {});

    // Handle size selection
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        setItemAdded(false); // Reset itemAdded state when size changes
    };

    // Handle adding to cart
    const handleAddToCart = () => {
        if (selectedSize) {
            const selectedItem = relatedItems.find(i => i.size === selectedSize);
            if (selectedItem && selectedItem.stock > 0) {
                increaseItemQuantity(selectedItem.id, selectedSize, availableSizes);
                setItemAdded(true);

                // Reset itemAdded state after a short delay (e.g., 2 seconds)
                setTimeout(() => {
                    setItemAdded(false);
                }, 1000);
            } else {
                setAlertMessage("Selected size is out of stock");
                setShowAlert(true);
            }
        } else {
            setAlertMessage("Please select a size");
            setShowAlert(true);
        }
    };

    return (
        <div className="store-item-wrapper">
            <img className="store-item-image" src={item.images[0]} alt={`${item.description}`} />
            <div className="store-item-info">
                <div className="store-item-name">{item.name.split(' - ')[0].toUpperCase()}</div>
                <div className="store-item-price">{formatCurrency(item.price)}</div>

                {/* Size selection dropdown */}
                <div className="store-item-sizes">
                    <select
                        id={`size-select-${item.id}`}
                        value={selectedSize}
                        onChange={handleSizeChange}
                        className="size-select"
                    >
                        <option value="">🤘Select Size🤘</option>
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
                        backgroundColor: itemAdded ? "lightgreen" : "white",
                        animation: itemAdded ? "bounce 0.3s ease" : "none"
                    }}
                    onClick={handleAddToCart}
                    disabled={itemAdded}
                >
                    {itemAdded ? "Item Added!" : "+ Add To Cart"}
                </button>
            </div>

            <Modal show={showAlert} onHide={() => setShowAlert(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Jeff says...</Modal.Title>
                </Modal.Header>
                <Modal.Body>{alertMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAlert(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
