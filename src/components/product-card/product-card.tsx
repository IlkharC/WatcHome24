import type { Product } from "@/types/product";
import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps)
{
    return (
        <Link to={`/products/${product.slug}`}>
            <div className="product-card">
                <div className="product-card-image">
                    <img src={product.variants[0]?.image} alt={product.name} />
                </div>
                <div className="product-card-info">
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-description">{product.description}</p>
                    <p className="product-card-price">{product.price}</p>
                </div>
                <div className="hover-actions">
                    <button className="product-card-add-to-cart">Add to Cart</button>
                    <div className="icon-buttons">
                        <button className="icon-button">
                            <Share2/>
                        </button>
                        <button className="icon-button">
                            <ArrowRightLeft/>
                        </button>
                        <button className="icon-button">
                            <Heart/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}