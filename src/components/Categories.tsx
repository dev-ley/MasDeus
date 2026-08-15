import "./Categories.css";

export function Categories() {
  return (
    <section className="categories">
      <h3 className="categories__title">CATEGORIAS</h3>

      <div className="categories__grid">
        <div className="category-card">
          <img src="/images/categories/fe.png" alt="Fé" />
          <h4>Fé</h4>
        </div>

        <div className="category-card">
          <img src="/images/categories/familia.png" alt="Família" />
          <h4>Família</h4>
        </div>

        <div className="category-card">
          <img src="/images/categories/estudos.png" alt="Estudos" />
          <h4>Estudos</h4>
        </div>

        <div className="category-card">
          <img src="/images/categories/devocionais.png" alt="Devocionais" />
          <h4>Devocionais</h4>
        </div>
      </div>
    </section>
  );
}
