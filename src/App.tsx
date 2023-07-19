import Carousel from "./components/carousel/carousel";
import Label from "./components/label/label";
import BuyNow from "./components/buyNow/buyNow";
import NavBar from "./components/navbar/navbar";
import "./general.css";

function App() {
  return (
    <>
      <NavBar />
      <Label />
      <Carousel />
      <BuyNow />
    </>
  );
}

export default App;
