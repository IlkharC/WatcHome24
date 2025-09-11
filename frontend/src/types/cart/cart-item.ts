import type { Product, ProductVariant } from "../product";

export interface CartItem {
    id: number;
    product: Pick<Product, "id" | "name" | "price">;
    variant: ProductVariant;
    quantity: number;
}   