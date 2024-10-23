import React from 'react';
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';
import merchItems from '../../../merchdata/merchitems.json';

export default function Merch() {
    // Filter items to display only one representative for each style
    const uniqueItems = merchItems.reduce((acc, currentItem) => {
        const existingItem = acc.find(item => item.name.split(' - ')[0] === currentItem.name.split(' - ')[0]);
        if (!existingItem) {
            acc.push(currentItem);
        }
        return acc;
    }, []);

    return (
        <ul className="merch-ul">
            {uniqueItems.map(item => (
                <StoreItem key={item.id} item={item} allItems={merchItems} />
            ))}
        </ul>
    );
}
