import { Button, Stack } from "react-bootstrap";
import { useMerchCart } from "../../context/MerchCartContext";
import merchItems from '../../merchdata/merchitems.json';
import formatCurrency from "../../utilities/formatCurrency";

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useMerchCart();
    const item = merchItems.find(i => i.id === id);
    if (item == null) return null;

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.images[0]}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
                alt="merch-item"
            />

            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: ".65rem"}}>
                            {quantity}x
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}