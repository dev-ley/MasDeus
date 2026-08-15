import "./WordHighlight.css";

export function WordHighlight() {
  return (
    <section className="word-highlight">
      <div className="word-highlight__content">
        <h3 className="word-highlight__title">PALAVRA EM DESTAQUE</h3>
        <div className="word-highlight__divider" />
          <img src="/images/wordHighlight/aspas.png"  alt="Mas Deus" className="aspas__img" />
        <h2 className="word-highlight__verse">
          O Senhor é o meu pastor; nada me faltará.
        </h2>
        <div className="word-highlight__divider" />

        <p className="word-highlight__ref">SALMO 23.1 <span className="word-highlight__refblack">| NVI</span></p>
      </div>
    </section>
  );
}
