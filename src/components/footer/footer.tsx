import "./footer.css";
import instagram from "../../images/media/instagram.png";
import facebook from "../../images/media/facebook.png";
import youtube from "../../images/media/youtube.png";
import methods from "../../images/methods.png";
import superInt from "../../images/super.png";

function Footer() {
  return (
    <>
      <footer>
        <div id="upper">
          <ul>
            <li>
              <b>EXPLORA</b>
            </li>
            <li>HOMBRE</li>
            <li>MUJER</li>
            <li>NIÑOS</li>
            <li>ACCESORIOS Y EQUIPAMENTO</li>
            <li>NUEVA COLECCION</li>
            <li>SALE</li>
          </ul>
          <ul>
            <li>
              <b>SOBRE NOSOTROS</b>
            </li>
            <li>PREGUNTAS FRECUENTES</li>
            <li>NUESTRA HISTORIA</li>
            <li>TECNOLOGIAS THE NORTH FACE</li>
            <li>RESPONSABILIDAD SOCIAL</li>
            <li>CONSERVACION</li>
            <li>CUIDADO DEL PRODUCTO</li>
            <li>TABLA DE TALLAS</li>
            <li>NUESTRAS TIENDAS</li>
            <li>COMUNICADOS</li>
            <li>¿COMO REDIMIR UN VALE?</li>
          </ul>
          <ul>
            <li>
              <b>MI CUENTA</b>
            </li>
            <li>MI PERFIL</li>
            <li>TERMINOS Y CONDICIONES</li>
            <li>CONTACTENOS</li>
          </ul>
          <ul>
            <li>
              <b>POLÍTICAS</b>
            </li>
            <li>GARANTÍAS Y CAMBIOS</li>
            <li>TÉRMINOS Y CONDICIONES</li>
            <li>PROMOCIONES</li>
            <li>POLÍTICAS DE PRIVACIDAD</li>
            <li>MEDIOS DE PAGO</li>
          </ul>
          <div>
            <div className="social-media">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
            </div>
            <ul>
              <li>
                <b>SERVICIO AL CLIENTE</b>
              </li>
              <li>HORARIO: L-V 10AM-5PM</li>
              <li>TELÉFONO: (601)4898397</li>
            </ul>
          </div>
        </div>

        <div id="lower">
          <div className="lower-item legal">
            <img className="methods" src={methods} alt="" />
            <div>
              <img className="super" src={superInt} alt="" />
              <p>
                TNF © Todos los derechos reservados. Las eventuales promociones,
                descuentos y plazos de pago expuestos aquí son válidos sólo para
                compras vía internet.Las fotos, textos y diseños aquí publicados
                son propiedad de la marca. Se prohíbe el uso total o parcial sin
                autorización previa.
              </p>
            </div>
          </div>
          <div className="lower-item form">
            <p className="off">
              Recuerda que tienes el 15% de dcto. En tu primera compra.
            </p>

            <form action="">
              <input type="text" placeholder="Ingresa tu nombre" />
              <input type="text" placeholder="Ingresa tu e-mail" />
              <p className="agreement">
                <input type="checkbox" name="" id="" checked /> Acepto el
                tratamiento de mis datos personales de acuerdo con la Política
                de Tratamiento de Datos Personales de Pernine Ldta.
              </p>
              <input type="submit" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
