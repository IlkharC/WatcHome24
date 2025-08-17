import { useCartStore } from "@/store/useCartStore";
import type { Product, ProductVariant } from "@/types/product";
import { Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface ProductDetailSectionProps {
    product: Product;
}

export default function ProductDetailSection({ product }: ProductDetailSectionProps)
{
    const { addItem } = useCartStore()

    const [ searchParams, setSearchParams ] = useSearchParams()

    const initialSku = searchParams.get("variant")
    const initialVariant = 
        product.variants.find((v) => v.sku === initialSku) ?? product.variants[0];
    
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(initialVariant);
    const [primaryImage, setPrimaryImage] = useState<string>(
        initialVariant?.gallery?.[0] ?? ""
    );
    const [quantity, setQuantity] = useState(1);

    const [ selectedColor, setSelectedColor ] = useState(selectedVariant.colorName)

    useEffect(() => {
        const variant = product.variants.find((p) =>
            p.colorName === selectedColor
        )

        if (variant) {
            setSelectedVariant(variant)
            setPrimaryImage(variant.gallery?.[0] ?? "")
            setSearchParams({ variant: variant.sku })
        }
    }, [selectedColor])

    const handleIncreaseQuantity = () => setQuantity((q) => q + 1);
    const handleDecreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : q));
    const handleSelectImage = (index: number) => {
        setPrimaryImage(selectedVariant.gallery[index] ?? primaryImage);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        addItem(product, {
            variant: selectedVariant,
            quantity
        });
    };

    const colors = product.variants.map((v) => v.colorName)

    return (
        <div className="product-detail-section">
            <div className="product-detail-main">
                <div className="product-detail-left">
                    <div className="product-images">
                        {selectedVariant?.gallery && selectedVariant?.gallery.length > 0 && (
                            <div className="gallery-images">
                                {selectedVariant.gallery.map((image, index) => (
                                    <img 
                                        key={image} 
                                        onClick={() => handleSelectImage(index)}
                                        src={image} 
                                        alt={`${product.name} gallery ${index + 1}`} 
                                    />
                                ))}
                            </div>
                        )}
                        <div className="primary-image">
                            <img src={primaryImage} alt={product.name} />
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
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        style={{ 
                                            backgroundColor: product.variants.find(
                                                (v) => v.colorName === color)?.colorCode,
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            border: '1px solid #000',
                                            marginRight: '8px',
                                            cursor: 'pointer'
                                        }}
                                        className={`color-option ${
                                            color === selectedColor ? "selected" : "" 
                                        }`}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="product-detail-actions">
                            <div className="product-detail-quantity-box">
                                <button className="product-detail-decrease" onClick={handleDecreaseQuantity}>-</button>
                                <span className="product-detail-quantity">{quantity}</span>
                                <button className="product-detail-increase" onClick={handleIncreaseQuantity}>+</button>
                            </div>
                            <button 
                                className="product-detail-add-to-cart"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
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