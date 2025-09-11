import products from "@/data/products";
import { useParams } from "react-router-dom";
import ProductDetailSection from "./components/product-detail-section";

export default function ProductDetail()
{
    const { slug } = useParams()

    const product = products.find((p) => p.slug === slug)

    if (!product) {
        return <h2>Product not found.</h2>
    }

    return (
        <div className="product-detail-page">
            <ProductDetailSection product={product}/>
        </div>
    );
}