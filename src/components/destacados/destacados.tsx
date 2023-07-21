import "./destacados.css";
import img from "../../images/destacados/NF0A4QPM1D4_1.png";

function Destacados() {
  return (
    <>
      <div id="main-destacados">
        <h2 id="title-destacados">Destacados</h2>
        <div className="items-container">
          <div id="flex-destacado">
            <div className="destacado-item">
              <div className="discount">20%</div>
              <img src={img} alt="" />
              <div className="info">
                <p className="item-name">
                  Camisa Campshire Negra Hombre The North Face
                </p>
                <div className="price">
                  <p className="before">$749.900</p>
                  <p className="after">$599.920</p>
                </div>
              </div>
              <div className="buy">Comprar</div>
            </div>

            <div className="destacado-item">
              <div className="discount">20%</div>
              <img src={img} alt="" />
              <div className="info">
                <p className="item-name">
                  Camisa Campshire Negra Hombre The North Face
                </p>
                <div className="price">
                  <p className="before">$749.900</p>
                  <p className="after">$599.920</p>
                </div>
              </div>
              <div className="buy">Comprar</div>
            </div>

            <div className="destacado-item">
              <div className="discount">20%</div>
              <img src={img} alt="" />
              <div className="info">
                <p className="item-name">
                  Camisa Campshire Negra Hombre The North Face
                </p>
                <div className="price">
                  <p className="before">$749.900</p>
                  <p className="after">$599.920</p>
                </div>
              </div>
              <div className="buy">Comprar</div>
            </div>

            <div className="destacado-item">
              <div className="discount">20%</div>
              <img src={img} alt="" />
              <div className="info">
                <p className="item-name">
                  Camisa Campshire Negra Hombre The North Face
                </p>
                <div className="price">
                  <p className="before">$749.900</p>
                  <p className="after">$599.920</p>
                </div>
              </div>
              <div className="buy">Comprar</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destacados;
