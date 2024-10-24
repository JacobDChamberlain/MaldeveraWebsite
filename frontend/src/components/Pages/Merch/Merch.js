import React from 'react';  // You can remove useState since we're using context
import StoreItem from './StoreItem/StoreItem';
import './Merch.css';
import { useInventory } from '../../../context/InventoryContext';

export default function Merch() {
    const { inventory, loading } = useInventory();

    // Filter items to display only one representative for each style
    const uniqueItems = inventory.reduce((acc, currentItem) => {
        const existingItem = acc.find(item => item.name.split(' - ')[0] === currentItem.name.split(' - ')[0]);
        if (!existingItem) {
            acc.push(currentItem);
        }
        return acc;
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul className="merch-ul">
            {uniqueItems.map(item => (
                <StoreItem key={item.id} item={item} allItems={inventory} />
            ))}
        </ul>
    );
}