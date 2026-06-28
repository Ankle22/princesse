function Flourish() {
  return (
    <svg
      className="flourish"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 20 C 50 0, 80 40, 100 20 C 120 0, 150 40, 190 20"
        stroke="#C9A463"
        strokeWidth="1"
      />
      <circle cx="100" cy="20" r="3" fill="#C9A463" />
    </svg>
  );
}

function Hero({ content }) {
  return (
    <section className="hero">
      <Flourish />
      <p className="eyebrow">{content.eyebrow}</p>
      <h1>
        Pour toi,<span className="script">Princesse</span>
      </h1>
      <p className="hero-sub">{content.subtitle}</p>
      <p className="scroll-hint">{content.scrollHint}</p>
    </section>
  );
}

export default Hero;
