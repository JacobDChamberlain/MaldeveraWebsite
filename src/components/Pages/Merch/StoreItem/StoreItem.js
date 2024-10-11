import React from "react";
import { useNavigate } from "react-router-dom";
import './StoreItem.css';
// import ImageSwiper from "../../../ImageSwiper/ImageSwiper";


export default function StoreItem({ item }) {
    const navigate = useNavigate();

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
                    ${ item.price }.00
                </div>
                <button className='store-item-purchase-button' onClick={ () => navigate("/giveusyourmoney")}>Add to Cart 🛒</button>
            </div>
        </div>
    )
}