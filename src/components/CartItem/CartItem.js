import React from "react";
import formatCurrency from "../../utilities/formatCurrency";
import { useMerchCart } from "../../context/MerchCartContext";
import merchItems from '../../merchdata/merchitems.json';

export function CartItem({ id, quantity, size }) {
    const { removeFromCart } = useMerchCart();
    const item = merchItems.find(i => i.id === id);

    if (item == null) return null;

    return (
        <div className="d-flex align-items-center">
            <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: "125px", height: "auto", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {size && <span className="text-muted" style={{ fontSize: ".75rem" }}>({size.toUpperCase()})</span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)} x {quantity}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(id, size)}
            >
                &times;
            </button>
        </div>
    );
}
