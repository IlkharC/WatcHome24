import { useCartStore } from "@/store/useCartStore";
import type { CartItem } from "@/types/cart/cart-item";
import { X } from "lucide-react";

interface SidebarCartItemProps {
    item: CartItem;
}

export default function SidebarCartItem({ item }: SidebarCartItemProps)
{
    const { removeItem } = useCartStore()
    
    return (
        <div className="sidebar-cart-item">
            <div className="sidebar-cart-item-image">
                <img src={item.variant.image} alt={item.product.name} />
            </div>

            <div className="sidebar-cart-item-details">
                <p className="sidebar-cart-item-name">{item.product.name}</p>
                <div className="sidebar-cart-item-meta">
                    <span className="sidebar-cart-item-quantity">{item.quantity}x </span>
                    <span className="sidebar-cart-item-price">
                        {item.product.price.toLocaleString("id-ID")} ₼
                    </span>
                </div>
            </div>

            <button 
                className="sidebar-cart-item-remove"
                onClick={() => removeItem(item.id)}
            >
                <X size={14}/>
            </button>
        </div>
    );
}