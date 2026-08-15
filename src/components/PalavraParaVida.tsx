import { FaBible, FaRegLightbulb, FaPrayingHands, FaHandsHelping } from "react-icons/fa";
import "./PalavraParaVida.css";

export function PalavraParaVida() {
  return (
    <section className="palavra-para-vida">
      <div className="palavra-para-vida__overlay">
        <div className="palavra-para-vida__content">

          <div className="palavra-para-vida__icon">
            <FaBible size={40} />
          </div>

          <h2>DA PALAVRA <br /> PARA A VIDA</h2>
          <p className="textpalavravida">
            A Bíblia não foi dada apenas para ser estudada. <br />
            Foi dada para transformar a maneira como vivemos.
          </p>

          <div className="palavra-para-vida__links">

            <a href="#" className="link-item">
              <FaRegLightbulb size={22} />
              <span>Reflexões</span>
            </a>

            <a href="#" className="link-item">
              <FaPrayingHands size={22} />
              <span>Devocionais</span>
            </a>

            <a href="#" className="link-item">
              <FaHandsHelping size={22} />
              <span>Aplicações Práticas</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
