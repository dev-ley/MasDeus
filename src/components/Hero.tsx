import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <h2 className="hero__title">
          A GRAÇA <br /> MUDA <span className="hero__highlight">TUDO.</span>
        </h2>

        <div className="hero__paragraphs">
          <p>Palavra que edifica.</p>
          <p>Verdade que transforma.</p>
          <p>Fé para viver o Evangelho.</p>
        </div>

        <div className="hero_cta_container">
          <button className="hero__cta">EXPLORAR ARTIGOS <span className="setabt"> → </span></button>
        </div>
      </div>
    </section>
  );
}
