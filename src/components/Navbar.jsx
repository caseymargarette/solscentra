import { useCart } from "../context/CartContext";

export default function Navbar({ onCartOpen }) {
  const { count } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🕯️</span>
        <span className="brand-name">Solscentra</span>
      </div>
      <div className="navbar-links">
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contactUs">Contact Us</a>
      </div>
      {/* <button className="cart-btn" onClick={onCartOpen}>
        <span className="cart-icon">🛒</span>
        {count > 0 && <span className="cart-badge">{count}</span>}
      </button> */}
    </nav>
  );
}
