import { LoadingWrapper } from "./LoadingWrapper";

interface ProductCardProps {
  loading: boolean;
  title: string;
  price: number;
  rating: number;
  inStock: boolean;
  onAddToCart: () => void;
}

// Receives a `loading` prop but does NOT handle it
export const ProductCard: React.FC<ProductCardProps> = ({ title, price, rating, inStock,loading, onAddToCart,}) => {
  return (
    <LoadingWrapper loading={loading}>
        <div className="product-card">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="rating">⭐ {rating}</p>
        <p className="stock">{inStock ? "In Stock" : "Out of Stock"}</p>
        <button onClick={onAddToCart} disabled={!inStock}>
          Add to Cart
        </button>
        </div>
    </LoadingWrapper>
  );
};
