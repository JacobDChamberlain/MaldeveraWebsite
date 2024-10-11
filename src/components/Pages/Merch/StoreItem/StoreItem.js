import React from "react";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../../../utilities/formatCurrency";
import './StoreItem.css';
// import ImageSwiper from "../../../ImageSwiper/ImageSwiper";


export default function StoreItem({ item }) {
    const navigate = useNavigate();
    const quantity = 1;

    return (
        <div className="store-item-wrapper">
            {
                // item.images?.length < 2 ?
                <img className="store-item-image" src={ item.images[0] } alt={ `${ item.description }` } />
                // : <ImageSwiper images={ item.images } /> //? account for this later
            }
            <div className="store-item-info">
                <div className="store-item-name">
                    { item.name.toUpperCase() }
                </div>
                <div className="store-item-price">
                    {formatCurrency(item.price)}
                </div>
                {quantity === 0 ? (
                    <button>+ Add To Cart</button>
                    ) : (<div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: ".5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
                            <button style={{ cursor: "pointer" }}>-</button>
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <button style={{ cursor: "pointer" }}>+</button>
                        </div>
                        <button style={{ backgroundColor: "orangered", borderRadius: "40px", border: "none", color: "white", padding: "5px 10px 5px 10px", cursor: "pointer" }}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    )
}