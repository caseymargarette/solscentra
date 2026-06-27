export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>🕯️</span>
          <strong>Lumière</strong>
        </div>
        <p>© {new Date().getFullYear()} Lumière Candle Co. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
