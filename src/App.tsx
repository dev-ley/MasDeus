import { Articles } from "./components/Articles";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PalavraParaVida } from "./components/PalavraParaVida";
import Purpose from "./components/Purpose";
import { WordHighlight } from "./components/WordHighlight";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WordHighlight />
      <Articles /> 
      <PalavraParaVida/>
      <Categories/>
      <Purpose/>
    </>
  );
}

export default App;
