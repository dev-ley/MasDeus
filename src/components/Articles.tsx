import "./Articles.css";

export function Articles() {
  return (
    <section className="articles">
      <div className="articles__header">
        <h2>Leia. Reflita. Viva.</h2>
        <p>
          Artigos que fortalecem sua fé e aprofundam sua caminhada com Deus.
        </p>
      </div>

      <div className="articles__grid">
        <article className="article-card">
          <img src="/images/articles/artigosimg.png" alt="Prossigo para o Alvo" />
          <div className="article-content">
            <h4>Prossigo para o Alvo</h4>
            <span className="article-ref">Filipenses 3:12-16</span>
            <span className="article-time">12 min de leitura</span>
            <button>LER ARTIGO</button>
          </div>
        </article>

        <article className="article-card">
          <img src="/images/articles/artigosimg.png" alt="Oséias, o pregador incansável" />
          <div className="article-content">
            <h4>Oséias, o pregador incansável</h4>
            <span className="article-ref"> Oséias</span>
            <span className="article-time">15 min de leitura</span>
            <button>LER ARTIGO</button>
          </div>
        </article>

        <article className="article-card">
          <img src="/images/articles/artigosimg.png" alt="Quem é o maior?" />
          <div className="article-content">
            <h4>Quem é o maior?</h4>
            <span className="article-ref">Marcos 9:33-50</span>
            <span className="article-time">10 min de leitura</span>
            <button>LER ARTIGO</button>
          </div>
        </article>
      </div>

      <div className="articles__footer">
        <button className="articles__all">VER TODOS OS ARTIGOS</button>
      </div>
    </section>
  );
}
