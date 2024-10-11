import React, { createContext, useContext, useState } from 'react';

const MerchCartContext = createContext();

export function useMerchCart() {
    return useContext(MerchCartContext);
}

export function MerchCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Get quantity of a specific item by ID
    function getItemQuantity(id) {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 0;
    }

    // Increase quantity of an item
    function increaseItemQuantity(id) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { id, quantity: 1 }];
            }
        });
    }

    // Decrease quantity of an item
    function decreaseItemQuantity(id) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id);

            if (existingItem && existingItem.quantity === 1) {
                return prevItems.filter(item => item.id !== id);
            } else {
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    }

    // Remove an item from the cart
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    // Calculate total number of items in cart
    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

    const value = {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartQuantity,
    };

    return (
        <MerchCartContext.Provider value={value}>
            {children}
        </MerchCartContext.Provider>
    );
}
