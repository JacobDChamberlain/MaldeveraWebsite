import { useMerchCart } from "../../context/MerchCartContext";
import { CartItem } from "../CartItem/CartItem";
import './MerchCart.css';

export function MerchCart({ isOpen }) {
    const { closeCart, cartItems } = useMerchCart();

    return (
        <div className={`offcanvas ${isOpen ? 'show' : ''}`} onClick={closeCart}>
            <div className="offcanvas-header">
                <button className="close-button" onClick={closeCart}>X</button>
                <h5>Cart</h5>
            </div>
            <div className="offcanvas-body">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
