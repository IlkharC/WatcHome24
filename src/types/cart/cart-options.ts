import type { ProductVariant } from "../product";

export interface CartOptions {
    variant: ProductVariant;
    quantity?: number;
}