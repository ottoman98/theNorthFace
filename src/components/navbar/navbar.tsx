import "./navbar.css";
import logo from "../../images/northLoago.png";
import info from "../../images/info.png";
import user from "../../images/user.png";
import cart from "../../images/shopping-cart.png";
import search from "../../images/search.png";

function NavBar() {
  const cartItems = 22;
  return (
    <>
      <nav>
        <ul className="purchase-menu">
          <li>
            <img src={info} alt="seguimiento de pedido" />
            SEGUIMIENTO DE PEDIDO
          </li>
          <li>
            <img src={user} alt="mi cuenta" />
            MI CUENTA
          </li>
          <li className="cart">
            <img src={cart} alt="mis compras" />
            <div>{cartItems}</div>
          </li>
        </ul>

        <ul className="nav-items">
          <li className="nav-left">
            <li>
              <img src={logo} alt="logo" id="logo" />
            </li>
            <ul className="nav-categories">
              <ul className="categories-dropdown">
                <li id="hombre">HOMBRE</li>

                <div className="dropdown">
                  <ul>
                    <li>
                      <b>PRODUCTOS DESTACADOS</b>
                    </li>
                    <li>NUEVA COLECCIÓN</li>
                    <li>THERMOBALL</li>
                    <li>VECTIV</li>
                    <li>SALE & ÚLTIMAS UNIDADES</li>
                  </ul>
                  <ul>
                    <li>
                      <b>CHAQUETAS Y CHALECOS</b>
                    </li>
                    <li>3 EN 1</li>
                    <li>TÉRMICAS</li>
                    <li>IMPERMEABLES</li>
                    <li>POLAR</li>
                    <li>ROMPEVIENTOS</li>
                    <li>SOFTSHELLS</li>
                    <li>CHALECOS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ROPA</b>
                    </li>
                    <li>BUZOS</li>
                    <li>CAMISAS Y POLOS</li>
                    <li>CAMISETAS</li>
                    <li>PANTALONES</li>
                    <li>PANTALONETAS</li>
                    <li>PRENDAS BÁSICAS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ZAPATOS</b>
                    </li>
                    <li>BOTAS</li>
                    <li>DE MONTAÑA & SENDERISMO</li>
                    <li>DEPORTIVOS</li>
                    <li>CASUALES</li>
                    <li>CHANCLAS & SANDALIAS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ACCESORIOS</b>
                    </li>
                    <li>GORRAS Y GORROS</li>
                    <li>CUELLOS Y BUFANDAS</li>
                    <li>GUANTES</li>
                    <li>BOLSOS Y RIÑONERAS</li>
                  </ul>
                </div>
              </ul>

              {/* mujer*/}

              <ul className="categories-dropdown">
                <li id="hombre">HOMBRE</li>

                <div className="dropdown">
                  <ul>
                    <li>
                      <b>PRODUCTOS DESTACADOS</b>
                    </li>
                    <li>NUEVA COLECCIÓN</li>
                    <li>THERMOBALL</li>
                    <li>VECTIV</li>
                    <li>SALE & ÚLTIMAS UNIDADES</li>
                  </ul>
                  <ul>
                    <li>
                      <b>CHAQUETAS Y CHALECOS</b>
                    </li>
                    <li>3 EN 1</li>
                    <li>TÉRMICAS</li>
                    <li>IMPERMEABLES</li>
                    <li>POLAR</li>
                    <li>ROMPEVIENTOS</li>
                    <li>SOFTSHELLS</li>
                    <li>CHALECOS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ROPA</b>
                    </li>
                    <li>BUZOS</li>
                    <li>CAMISAS Y POLOS</li>
                    <li>CAMISETAS</li>
                    <li>PANTALONES</li>
                    <li>PANTALONETAS</li>
                    <li>PRENDAS BÁSICAS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ZAPATOS</b>
                    </li>
                    <li>BOTAS</li>
                    <li>DE MONTAÑA & SENDERISMO</li>
                    <li>DEPORTIVOS</li>
                    <li>CASUALES</li>
                    <li>CHANCLAS & SANDALIAS</li>
                  </ul>
                  <ul>
                    <li>
                      <b>ACCESORIOS</b>
                    </li>
                    <li>GORRAS Y GORROS</li>
                    <li>CUELLOS Y BUFANDAS</li>
                    <li>GUANTES</li>
                    <li>BOLSOS Y RIÑONERAS</li>
                  </ul>
                </div>
              </ul>
            </ul>
          </li>
          <li className="nav-right">
            <div className="search-input">
              buscar
              <img src={search} alt="" />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
