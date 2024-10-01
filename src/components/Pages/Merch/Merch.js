import React from 'react';
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';

import blueJeff from '../../../images/shirt-designs/BLUE-JEFF.png';
import goreLogo from '../../../images/shirt-designs/GORE-LOGO.png';
import snakeSkull from '../../../images/shirt-designs/snake-skull.png';
import fm2mFront from '../../../images/shirt-designs/man2mist-FRONT.png';
import fm2mBack from '../../../images/shirt-designs/man2mist-BACK.png';


const shirtDesigns = [
    {
        name: 'Blue Jeff',
        images: [blueJeff],
        description: "A wild BLUE JEFF appears...",
        price: 20
    },
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
        name: 'From Man To Mist',
        images: [fm2mFront, fm2mBack],
        description: "From Man To Mist",
        price: 30
    }
];


export default function Merch() {
    return (
        <ul className="merch-ul">
            { shirtDesigns.map( shirt => (
                <StoreItem key={ shirt.name } item={ shirt } />
            )) }
        </ul>
    )
}