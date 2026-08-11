import { useState } from "react";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <img src="/images/header/logo.jpeg" alt="Mas Deus" className="logo__img" />
        </div>

        {/* Menu desktop */}
        <nav className="header__nav">
          <a href="/">INÍCIO</a>
          <a href="/palavra">PALAVRA</a>
          <a href="/artigos">ARTIGOS</a>
          <a href="/estudos">ESTUDOS</a>
          <a href="/reflexoes">REFLEXÕES</a>
          <a href="/sobre">SOBRE</a>
          <a href="/explorar" className="header__cta">EXPLORAR</a>
        </nav>

        {/* Botão mobile */}
        <button
          className="header__menuButton"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className="header__hamburger" />
        </button>
      </div>

      {/* Menu lateral mobile */}
      <div className={`menuMobile ${open ? "open" : ""}`}>
        <div className="menuHeader">
          <div className="menuLogo">
            <img src="/images/header/logo.jpeg" alt="Mas Deus" className="logo__img" />
            <span className="logo__text">MAS DEUS</span>
          </div>
          <button
            className="closeButton"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="menuNav">
          <a href="#">🏠 INÍCIO</a>
          <a href="#">📖 PALAVRA</a>
          <a href="#">📰 ARTIGOS</a>
          <a href="#">📚 ESTUDOS</a>
          <a href="#">💭 REFLEXÕES</a>
          <a href="#">ℹ️ SOBRE</a>
        </nav>
      </div>
    </header>
  );
}
