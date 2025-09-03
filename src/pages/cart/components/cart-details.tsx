import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import CartItemCard from "./cart-item-card";

export default function CartDetails()
{
    const { cart } = useCartStore()

    const getSubtotal = () => cart.reduce((subtotal, item) => subtotal + (item.product.price * item.quantity), 0)

    if (cart.length === 0)
    {
        return (
            <section className="cart-details-section empty">
                <ShoppingCart/>
                <p>Your cart is empty</p>
            </section>
        )
    }

    return (
        <section className="cart-details-section">

            {/* Cart Products */}
            <section className="cart-products">
                <table>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <CartItemCard cartItem={item}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Cart Summary */}
            <aside className="cart-summary">
                <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>

                <dl>
                    <div className="summary-line">
                        <dt>Subtotal</dt>
                        <dd>{getSubtotal()}</dd>
                    </div>
                    <div className="summary-line total">
                        <dt>Total</dt>
                        <dd>{getSubtotal()}</dd> {/* <- Will be updated */}
                    </div>
                </dl>

                <button className="checkout-button">
                    Check Out
                </button>
            </aside>

        </section>
    );
}