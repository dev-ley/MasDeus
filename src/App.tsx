import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="bg-body">
        <Hero />
      </div>
    </>
  );
}

export default App;
