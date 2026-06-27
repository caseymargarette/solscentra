import { useCart } from "../context/CartContext";

export default function Cart({ onClose }) {
  const { cart, dispatch, total } = useCart();

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🕯️</span>
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" onClick={onClose}>Start Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img" style={{ background: item.color + "33" }}>
                    {item.image}
                  </div>
                  <div className="cart-item-info">
                    <strong>{item.name}</strong>
                    <span>{item.size}</span>
                    <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      onClick={() =>
                        item.qty === 1
                          ? dispatch({ type: "REMOVE", id: item.id })
                          : dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty - 1 })
                      }
                    >−</button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty + 1 })
                      }
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary btn-full">Checkout</button>
              <button
                className="btn btn-ghost btn-full"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
