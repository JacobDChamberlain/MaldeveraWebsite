import React from "react";
import './StoreItem.css';

export default function StoreItem({ item }) {
    return (
        <div className="store-item-wrapper">
            <img className="store-item-image" src={ item.src } alt={ `${ item.description }` }></img>
            <div className="store-item-info">
                <div className="store-item-name">
                    { item.name.toUpperCase() }
                </div>
                <div className="store-item-price">
                    ${ item.price }.00
                </div>
                <button>Add To Cart 🛒</button>
            </div>
        </div>
    )
}