import { useState } from "react";
import { products, scents } from "../data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function Shop() {
  const [activeScent, setActiveScent] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeScent === "All"
      ? products
      : products.filter((p) => p.scent === activeScent);

  return (
    <section id="shop" className="shop">
      <div className="shop-header">
        <h2>Our Collection</h2>
        <div className="filter-tabs">
          {scents.map((s) => (
            <button
              key={s}
              className={`filter-tab ${activeScent === s ? "active" : ""}`}
              onClick={() => setActiveScent(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onClick={setSelected} />
        ))}
      </div>
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
