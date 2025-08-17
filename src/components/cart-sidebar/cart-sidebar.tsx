import { useCartSidebarStore } from "@/store/useCartSidebarStore";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ActionGroup from "../action-group/action-group";
import SidebarCartItem from "./sidebar-cart-item/sidebar-cart-item";

export default function CartSidebar()
{
    const navigate = useNavigate()
    const { cart } = useCartStore()
    const { isOpen, close } = useCartSidebarStore()

    return (
        <>
            {/* Cart Sidebar Backdrop */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-[1000]" onClick={close}></div>
            )}

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 w-[420px] max-w-full h-screen bg-white shadow-[ -4px_0_20px_rgba(0,0,0,0.1)] z-[1001] flex flex-col transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}>
                <div className="sidebar-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-btn" onClick={() => {
                        console.log("checked");
                        close();
                        }}>
                        <X size={20}/>
                    </button>
                </div>

                <div className="cart-content">
                    {cart.length > 0 ? (
                        <>
                            <div className="cart-products-list">
                                {cart.map((item) => (
                                    <SidebarCartItem key={item.id} item={item}/>
                                ))}
                            </div>

                            <div className="cart-footer">
                                <div className="cart-products-subtotal">
                                    <span>
                                        {cart.reduce(
                                            (total, item) => total + (item.product.price * item.quantity),
                                            0
                                        ).toLocaleString("id-ID")}
                                    </span>
                                </div>

                                <ActionGroup position="space-between">
                                    <button onClick={() => {
                                        close()
                                        navigate("/cart")
                                    }}>Cart</button>
                                    <button>Checkout</button>
                                    <button>Compare</button>
                                </ActionGroup>
                            </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <div className="empty-cart-icon">
                                <ShoppingCart/>
                            </div>
                            <p>Your cart is empty</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}