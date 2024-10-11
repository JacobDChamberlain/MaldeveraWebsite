import React from 'react';
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';

import merchItems from '../../../merchdata/merchitems.json';


export default function Merch() {
    return (
        <ul className="merch-ul">
            { merchItems.map( item => (
                <StoreItem key={ item.id } item={ item } />
            )) }
        </ul>
    )
}