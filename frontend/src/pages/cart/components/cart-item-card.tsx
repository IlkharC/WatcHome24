import { useCartStore } from "@/store/useCartStore";
import type { CartItem } from "@/types/cart/cart-item";
import { X } from "lucide-react";

interface CartItemCardProps {
    cartItem: CartItem;
}

export default function CartItemCard({ cartItem }: CartItemCardProps)
{
    const { cart, removeItem, increaseItemQuantity, decreaseItemQuantity } = useCartStore()

    const quantity = cart.find(item => item.id === cartItem.id)?.quantity ?? 1 

    const getItemSubtotal = () => cartItem.product.price * quantity

    return (
        <article className="item-card">
            <figure>
                <img 
                    className="item-image"
                    src={cartItem.variant.image} 
                    alt={cartItem.product.name} 
                />
                <figcaption className="item-name">{cartItem.product.name}</figcaption>
            </figure>
            
            <div className="item-price">
                <span itemProp="price" content={cartItem.product.price.toString()}>
                    ${cartItem.product.price}
                </span>
                <span itemProp="priceCurrency" content="USD">USD</span>
            </div>

            <div className="quantity-control">
                <button 
                    onClick={() => decreaseItemQuantity(cartItem.id)}
                    className="quantity-decrement"
                >
                    -
                </button>
                <p className="item-quantity">{quantity}</p>
                <button 
                    onClick={() => increaseItemQuantity(cartItem.id)}
                    className="quantity-increment"
                >
                    +
                </button>
            </div>

            <div className="item-subtotal">
                <span itemProp="subtotal" content={getItemSubtotal().toString()}>
                    ${getItemSubtotal().toString()}
                </span>
                <span itemProp="priceCurrency" content="USD">USD</span>
            </div>

            <button 
                className="item-remove"
                onClick={() => removeItem(cartItem.id)}
            >
                <X size={14}/>
            </button>
        </article>
    );
}