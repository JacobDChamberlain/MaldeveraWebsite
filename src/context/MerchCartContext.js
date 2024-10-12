import React, { createContext, useContext, useState } from 'react';
import { MerchCart } from '../components/MerchCart/MerchCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MerchCartContext = createContext();

export function useMerchCart() {
    return useContext(MerchCartContext);
}

export function MerchCartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
    const [isOpen, setIsOpen] = useState(false);


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

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const value = {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        openCart,
        closeCart
    };

    return (
        <MerchCartContext.Provider value={value}>
            {children}
            <MerchCart isOpen={isOpen} />
        </MerchCartContext.Provider>
    );
}
