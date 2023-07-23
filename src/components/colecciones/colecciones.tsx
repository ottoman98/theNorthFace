import "./colecciones.css";
import mujer from "../../images/mujer.png";
import hombre from "../../images/hombre.png";
function Colecciones() {
  return (
    <>
      <div id="colecciones">
        <h2>COLECCIONES</h2>
        <div>
          <div className="img-div">
            <img src={mujer} alt="" />
            <div className="text">
              <span>SHE</span>
              <span>EXPLORES</span>
            </div>
          </div>
          <div className="img-div">
            <img src={hombre} alt="" />

            <div className="text">
              <span>HE</span>
              <span>EXPLORES</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colecciones;
