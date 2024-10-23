import { Offcanvas, Stack } from "react-bootstrap";
import { useMerchCart } from "../../context/MerchCartContext";
import { CartItem } from "../CartItem/CartItem";
import './MerchCart.css';
import merchItems from "../../merchdata/merchitems.json";
import formatCurrency from "../../utilities/formatCurrency";

export function MerchCart({ isOpen }) {
    const { closeCart, cartItems } = useMerchCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={`${item.id}-${item.size}`} {...item} />
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
