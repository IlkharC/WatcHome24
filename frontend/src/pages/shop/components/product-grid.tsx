import ProductCard from "@/components/product-card/product-card";
import type { Product } from "@/types/product";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps)
{
    return (
        <section className="product-grid-section">
            <div className="product-grid-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}