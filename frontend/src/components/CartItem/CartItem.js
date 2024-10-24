import React from "react";
import formatCurrency from "../../utilities/formatCurrency";
import { useMerchCart } from "../../context/MerchCartContext";

export function CartItem({ id, quantity, size, merchItems }) {
    const { removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useMerchCart();
    const item = merchItems.find(i => i.id === id);

    if (item == null) return null;

    return (
        <div className="d-flex align-items-center">
            <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: "125px", height: "auto", objectFit: "cover" }}
            />
            <div className="me-auto ms-3">
                <div>
                    {item.name}{" "}
                    {size && <span className="text-muted" style={{ fontSize: ".75rem" }}>({size.toUpperCase()})</span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)} x {quantity}
                </div>
                <div className="d-flex align-items-center mt-2">
                    <button
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => decreaseItemQuantity(id, size)}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                        className="btn btn-outline-primary btn-sm ms-2"
                        onClick={() => increaseItemQuantity(id, size)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="ms-3">{formatCurrency(item.price * quantity)}</div>
            <button
                className="btn btn-outline-danger btn-sm ms-3"
                onClick={() => removeFromCart(id, size)}
            >
                &times;
            </button>
        </div>
    );
}
