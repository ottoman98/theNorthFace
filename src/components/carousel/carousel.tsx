import { RefObject, useRef } from "react";
import "./carousel.css";
import carousel1 from "../../images/carousel1.png";
import carousel2 from "../../images/carousel2.png";
import carousel3 from "../../images/carousel3.png";
import carousel4 from "../../images/carousel4.png";

function Carousel() {
  const images: Array<string> = [carousel1, carousel2, carousel3, carousel4];

  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  function scroll(value: number): void {
    if (typeof carouselRef.current?.scrollLeft == "number") {
      carouselRef.current.scrollLeft = value;
    }
    console.log(window.innerWidth);
  }

  return (
    <>
      <div id="carousel" ref={carouselRef}>
        {images.map((x) => {
          return <img className="carousel-img" src={x} alt="" />;
        })}
      </div>
      <div id="buttons">
        {images.map((_, index) => {
          return (
            <div
              className="carousel-button"
              onClick={() => {
                scroll(window.innerWidth * index);
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Carousel;
