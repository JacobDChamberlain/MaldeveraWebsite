import React from 'react';
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';

import goreLogo from '../../../images/shirt-designs/GORE-LOGO.png';
import snakeSkull from '../../../images/shirt-designs/snake-skull.png';
import fm2mFront from '../../../images/shirt-designs/man2mist-FRONT.png';
import fm2mBack from '../../../images/shirt-designs/man2mist-BACK.png';
import ImageSwiper from '../../ImageSwiper/ImageSwiper';


const shirtDesigns = [
    {
        name: 'Gore Logo',
        images: [goreLogo],
        description: "BAPTIZED...IN BLOOD!",
        price: 20
    },
    {
        name: 'Snake Skull',
        images: [snakeSkull],
        description: "Salvadora Maldevera",
        price: 20
    },
    {
        name: 'From Man To Mist FRONT',
        images: [fm2mFront],
        description: "From Man To Mist, Front of shirt",
        price: 30
    },
    {
        name: 'From Man To Mist BACK',
        images: [fm2mBack],
        description: "From Man To Mist, Front of shirt",
        price: 30
    }
];

const shirtImages = [ goreLogo, snakeSkull, fm2mFront, fm2mBack ];


export default function Merch() {
    return (
        <>
            <ImageSwiper images={ shirtImages } />
            <ul className="merch-ul">
                { shirtDesigns.map( shirt => (
                    <StoreItem key={ shirt.name } item={ shirt } />
                )) }
            </ul>
        </>
    )
}