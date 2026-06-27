export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-text">
          <h2>Made With Intention</h2>
          <p>
            Solscentra candles are hand-poured in small batches using 100% natural
            palm wax, lead-free cotton wicks, and phthalate-free fragrance oils.
            No paraffin. No toxins. Just a clean, long-lasting burn.
          </p>
          <p>
            Every scent is designed to evoke a feeling — a season, a memory, a
            moment of quiet. We hope our candles bring a little more warmth to
            your everyday.
          </p>
        </div>
        <div className="about-badges">
          {[
            { icon: "🌿", label: "100% Palm Wax" },
            { icon: "🧵", label: "Cotton Wick" },
            { icon: "✋", label: "Hand-Poured" },
            { icon: "🚫", label: "No Phthalates" },
          ].map((b) => (
            <div key={b.label} className="badge">
              <span>{b.icon}</span>
              <p>{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
