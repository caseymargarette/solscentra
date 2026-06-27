import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { dispatch } = useCart();

  function handleAdd() {
    dispatch({ type: "ADD", product });
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-image" style={{ background: product.color + "33" }}>
          <span className="modal-emoji">{product.image}</span>
        </div>
        <div className="modal-body">
          <span className="product-scent-tag">{product.scent}</span>
          <h2>{product.name}</h2>
          <p className="modal-description">{product.description}</p>
          <div className="modal-meta">
            <div><span>Size</span><strong>{product.size}</strong></div>
            <div><span>Burn Time</span><strong>{product.burnTime}</strong></div>
            <div><span>Wax</span><strong>100% Soy</strong></div>
            <div><span>Wick</span><strong>Cotton</strong></div>
          </div>
          <div className="modal-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button className="btn btn-primary" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
