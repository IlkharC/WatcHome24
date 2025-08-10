import products from "@/data/products";
import ProductGrid from "./components/product-grid";

export default function Shop()
{
    return (
        <div className="shop-page">
            <aside className="shop-sidebar">

            </aside>

            <div className="shop-main">
                <ProductGrid products={products} />
            </div>
        </div>
    );
}