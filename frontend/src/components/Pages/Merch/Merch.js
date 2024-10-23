import React, { useEffect, useState } from 'react';
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';

export default function Merch() {
    const [merchItems, setMerchItems] = useState([]);

    // Fetch the inventory data from the backend
    useEffect(() => {
        fetch('http://localhost:5001/api/inventory')
            .then(response => response.json())
            .then(data => setMerchItems(data))
            .catch(error => console.error('Error fetching inventory:', error));
    }, []);

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
