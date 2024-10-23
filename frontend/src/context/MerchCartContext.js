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

    function getItemQuantity(id, size) {
        const item = cartItems.find(item => item.id === id && item.size === size);
        return item ? item.quantity : 0;
    }

    function clearCart() {
        setCartItems([]);
    }

    // Simplified increaseItemQuantity without availability check
    function increaseItemQuantity(id, size) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id && item.size === size);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { id, size, quantity: 1 }];
            }
        });
    }

    function decreaseItemQuantity(id, size) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id && item.size === size);

            if (existingItem && existingItem.quantity === 1) {
                return prevItems.filter(item => !(item.id === id && item.size === size));
            } else {
                return prevItems.map(item =>
                    item.id === id && item.size === size
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    }

    function removeFromCart(id, size) {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === id && item.size === size))
        );
    }

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const value = {
        getItemQuantity,
        clearCart,
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