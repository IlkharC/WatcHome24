export interface ProductVariant {
    sku: string;
    colorName: string;
    colorCode: string;
    image: string;
    gallery: string[];
    stock: number;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    longDescription?: string;
    price: number;

    brand?: string;
    gender?: "Men" | "Women" | "Unisex";
    mechanismType?: string;
    strapMaterial?: string;
    waterResistance?: boolean;

    category?: string;
    tags?: string[];

    createdAt?: string;

    variants: ProductVariant[];
}