import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WordHighlight } from "./components/WordHighlight";

function App() {
  return (
    <>
      <Header />
      <div className="bg-body">
        <Hero />
      </div>
      <WordHighlight />

    </>
  );
}

export default App;
