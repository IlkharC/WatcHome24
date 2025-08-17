import type { CartItem } from "@/types/cart/cart-item";
import type { CartOptions } from "@/types/cart/cart-options";
import type { Product } from "@/types/product";
import { create } from "zustand";

interface CartState {
    cart: CartItem[];

    addItem: (product: Product, options: CartOptions) => void;

    removeItem: (itemId: number) => void;

    increaseItemQuantity: (itemId: number) => void;

    decreaseItemQuantity: (itemId: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],

    addItem: (product, { variant, quantity = 1}) =>
        set((state) => {
            const existingItem = state.cart.find(
                (item) =>
                    item.product.id === product.id &&
                    item.variant.sku === variant.sku
            )

            if (existingItem) {
                return {
                    cart: state.cart.map((item) => 
                        item.id === existingItem.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                }
            }

            const nextCartItemId = 
                state.cart.length > 0 ? Math.max(...state.cart.map(item => item.id)) + 1 
                : 1;

            const newItem: CartItem = {
                id: nextCartItemId,
                product: {
                    id: product.id,
                    name: product.name,
                    price: product.price
                },
                variant,
                quantity 
            }

            return {
                cart: [ ...state.cart, newItem ]
            }
        }),
    
    removeItem: (itemId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== itemId)
        })),
    
    increaseItemQuantity: (itemId) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        })),

    decreaseItemQuantity: (itemId) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1}
                    : item
            )
        }))
}))



