import { Offcanvas, Stack } from "react-bootstrap";
import { useMerchCart } from "../../context/MerchCartContext";
import { CartItem } from "../CartItem/CartItem";
import './MerchCart.css';
import formatCurrency from "../../utilities/formatCurrency";
import { useEffect, useState } from "react";

export function MerchCart({ isOpen }) {
    const { closeCart, cartItems, clearCart, increaseItemQuantity, decreaseItemQuantity } = useMerchCart();
    const [merchItems, setMerchItems] = useState([]);

    // Fetch the inventory data from the backend
    useEffect(() => {
        fetch('http://localhost:5001/api/inventory')
            .then(response => response.json())
            .then(data => setMerchItems(data))
            .catch(error => console.error('Error fetching inventory:', error));
    }, []);

    // Handle purchasing items in the cart
    const handlePurchase = () => {
        const itemsToPurchase = cartItems.map(({ id, quantity }) => ({
            id,
            quantity
        }));

        fetch('http://localhost:5001/api/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemsToPurchase)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Purchase successful!");
                clearCart(); // Clear the cart after successful purchase
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem
                            key={`${item.id}-${item.size}`}
                            {...item}
                            increaseQuantity={() => increaseItemQuantity(item.id, item.size)}
                            decreaseQuantity={() => decreaseItemQuantity(item.id, item.size)}
                        />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = merchItems.find(i => i.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            }, 0)
                        )}
                    </div>
                    <button
                        className="btn btn-primary w-100 mt-3"
                        onClick={handlePurchase}
                        disabled={cartItems.length === 0}
                    >
                        Purchase
                    </button>
                    <div className="ms-auto fs-5">
                        Page Under Construction
                        <div className="ms-auto fs-6">
                            For all merch & size inquiries, please message us on Instagram @maldevera, or any social media platform.
                        </div>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
