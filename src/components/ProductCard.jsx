import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onClick }) {
  const { dispatch } = useCart();

  function handleAdd(e) {
    e.stopPropagation();
    dispatch({ type: "ADD", product });
  }

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-image" style={{ background: product.color + "33" }}>
        <span className="product-emoji">{product.image}</span>
        <span className="product-scent-tag">{product.scent}</span>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-meta">{product.size} · {product.burnTime}</p>
        <div className="product-footer">
          <span className="product-price">Php {product.price.toFixed(2)}</span>
          {/* <button className="btn btn-sm btn-primary" onClick={handleAdd}>
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}
