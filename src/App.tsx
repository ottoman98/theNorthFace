import Carousel from "./components/carousel/carousel";
import Label from "./components/label/label";
import BuyNow from "./components/buyNow/buyNow";
import NavBar from "./components/navbar/navbar";
import Destacados from "./components/destacados/destacados";
import "./general.css";
import More from "./components/more/more";
import Colecciones from "./components/colecciones/colecciones";

function App() {
  return (
    <>
      <NavBar />
      <Label />
      <Carousel />
      <BuyNow />
      <Destacados />
      <More />
      <Colecciones />
    </>
  );
}

export default App;
