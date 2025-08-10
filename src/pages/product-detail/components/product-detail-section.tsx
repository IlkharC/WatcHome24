import type { Product } from "@/types/product";
import { Scale } from "lucide-react";
import { useState } from "react";

interface ProductDetailSectionProps {
    product: Product;
}

export default function ProductDetailSection({ product }: ProductDetailSectionProps)
{
    const [ quantity, setQuantity ] = useState(1)

    return (
        <div className="product-detail-section">
            <div className="product-detail-main">
                <div className="product-detail-left">
                    <div className="product-images">
                        {product.variants[0]?.gallery && product.variants[0]?.gallery.length > 0 && (
                            <div className="gallery-images">
                                {product.variants[0].gallery.map((image, index) => (
                                    <img key={image} src={image} alt={`${product.name} gallery ${index + 1}`} />
                                ))}
                            </div>
                        )}
                        <div className="main-image">
                            <img src={product.variants[0]?.gallery?.[0]} alt={product.name} />
                        </div>
                    </div>
                </div>
                <div className="product-detail-right">
                    <div className="product-detail-main-info">
                        <h2 className="product-detail-name">{product.name}</h2>
                        <p className="product-detail-price">{product.price} $</p>
                        <p className="product-detail-description">{product.longDescription}</p>

                        <div className="product-detail-options-group">
                            <p>Colors</p>
                            <div className="product-detail-options">
                                {product.variants.map((variant) => (
                                    <button
                                        key={variant.sku}
                                        style={{ 
                                            backgroundColor: variant.colorCode,
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            border: '1px solid #000',
                                            marginRight: '8px',
                                            cursor: 'pointer'
                                        }}
                                        className="color-option"
                                        title={variant.colorName}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="product-detail-actions">
                            <div className="product-detail-quantity-box">
                                <button className="product-detail-decrease">-</button>
                                <span className="product-detail-quantity">{quantity}</span>
                                <button className="product-detail-increase">+</button>
                            </div>
                            <button className="product-detail-add-to-cart">Add to Cart</button>
                            <button className="product-detail-compare">
                                <Scale/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-detail-specs">
                <h3>Details</h3>
                <ul>
                    {product.brand && <li><strong>Brand:</strong> {product.brand}</li> }
                    {product.mechanismType && <li><strong>Mechanism Type:</strong> {product.mechanismType}</li> }
                    {product.strapMaterial && <li><strong>Strap Material:</strong> {product.strapMaterial}</li> }
                    <li><strong>Water Resistance:</strong> {product.waterResistance ? "Yes" : "No"}</li>
                    {product.gender && <li><strong>Gender:</strong> {product.gender}</li> }
                </ul>
            </div>
        </div>
    );
}