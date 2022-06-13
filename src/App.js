import "./style/index.scss";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import assets from "./assets/exports/assets";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner shoes={assets.popUp.shoes} />
    </div>
  );
}

export default App;
