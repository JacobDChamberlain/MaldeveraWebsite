import { useMerchCart } from "../../context/MerchCartContext";
import merchItems from '../../merchdata/merchitems.json';

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useMerchCart();
    const item = merchItems.find(i => i.id === id);
    if (item == null) return null;

    return(
        <div direction="horizontal" gap={2}>
            <img src={item.imageURL} style={{width: "125px", height: "75px", objectFit: "cover" }} />

        </div>
    )
}