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

    // Get quantity of a specific item by ID and size
    function getItemQuantity(id, size) {
        const item = cartItems.find(item => item.id === id && item.size === size);
        return item ? item.quantity : 0;
    }

    // Clear cart items after a purchase is made
    function clearCart() {
        setCartItems([]);
    }

    // Increase quantity of an item based on ID and size, decrementing the available size
    function increaseItemQuantity(id, size, availableSizes) {
        // Decrement the available size before adding to cart
        if (availableSizes[size] > 0) {
            setCartItems(prevItems => {
                const existingItem = prevItems.find(item => item.id === id && item.size === size);

                // Update the available sizes
                const updatedAvailableSizes = { ...availableSizes, [size]: availableSizes[size] - 1 };

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

            // Here you can also update the global available sizes if needed
            // For example, you could set a state or context for availableSizes to update it globally.
        } else {
            alert("Selected size is out of stock");
        }
    }

    // Decrease quantity of an item based on ID and size
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

    // Remove an item from the cart based on ID and size
    function removeFromCart(id, size) {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === id && item.size === size))
        );
    }

    // Calculate total number of items in cart
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
