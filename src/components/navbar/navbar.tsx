import "./navbar.css";
import logo from "../../images/northLoago.png";
import info from "../../images/info.png";
import user from "../../images/user.png";
import cart from "../../images/shopping-cart.png";
import search from "../../images/search.png";

function NavBar() {
  const cartItems = 0;
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
                <li className="category">HOMBRE</li>

                <div className="dropdown">
                  <ul>
                    <li className="bold-sub-category">
                      <b>PRODUCTOS DESTACADOS</b>
                    </li>
                    <li>NUEVA COLECCIÓN</li>
                    <li>THERMOBALL</li>
                    <li>VECTIV</li>
                    <li>SALE & ÚLTIMAS UNIDADES</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
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
                    <li className="bold-sub-category">
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
                    <li className="bold-sub-category">
                      <b>ZAPATOS</b>
                    </li>
                    <li>BOTAS</li>
                    <li>DE MONTAÑA & SENDERISMO</li>
                    <li>DEPORTIVOS</li>
                    <li>CASUALES</li>
                    <li>CHANCLAS & SANDALIAS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
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
                <li className="category">MUJER</li>

                <div className="dropdown">
                  <ul>
                    <li className="bold-sub-category">
                      <b>PRODUCTOS DESTACADOS</b>
                    </li>
                    <li className="category-topic">NUEVA COLECCIÓN</li>
                    <li className="category-topic">THERMOBALL</li>
                    <li className="category-topic">VECTIV</li>
                    <li>SALE & ÚLTIMAS UNIDADES</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>CHAQUETAS Y CHALECOS</b>
                    </li>
                    <li>3 EN 1</li>
                    <li>TÉRMICAS</li>
                    <li>IMPERMEABLES</li>
                    <li>POLAR</li>
                    <li>ROMPEVIENTOS</li>
                    <li>CHALECOS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>ROPA</b>
                    </li>
                    <li>BUZOS</li>
                    <li>CAMISETAS</li>
                    <li>PANTALONES</li>
                    <li>PANTALONETAS</li>
                    <li>PRENDAS BÁSICAS</li>
                    <li>TOPS DEPORTIVOS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>ZAPATOS</b>
                    </li>
                    <li>BOTAS</li>
                    <li>DE MONTAÑA & SENDERISMO</li>
                    <li>DEPORTIVOS</li>
                    <li>CASUALES</li>
                    <li>CHANCLAS & SANDALIAS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>ACCESORIOS</b>
                    </li>
                    <li>GORRAS Y GORROS</li>
                    <li>CUELLOS Y BUFANDAS</li>
                    <li>GUANTES</li>
                    <li>BOLSOS Y RIÑONERAS</li>
                  </ul>
                </div>
              </ul>
              {/* niños*/}

              <ul className="categories-dropdown">
                <li className="category">NIÑOS</li>

                <div className="dropdown">
                  <ul>
                    <li className="bold-sub-category">
                      <b>TEENS NIÑAS (7-16 años)</b>
                    </li>
                    <li>CHAQUETAS Y CHALECOS</li>
                    <li>BUZOS Y TOPS</li>
                    <li>PANTALONES</li>
                    <li>ZAPATOS</li>
                    <li>ACCESORIOS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>TEENS NIÑOS (7-16 años)</b>
                    </li>
                    <li>CHAQUETAS Y CHALECOS</li>
                    <li>BUZOS Y TOPS</li>
                    <li>CAMISETAS</li>
                    <li>PANTALONES</li>
                    <li>ZAPATOS</li>
                    <li>ACCESORIOS</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>BEBÉS NIÑOS (0-6 años)</b>
                    </li>
                    <li>BEBÉS (0-2 AÑOS)</li>
                    <li>NIÑOS (2-6 AÑOS)</li>
                  </ul>
                </div>
              </ul>
              {/*accesorios y equipamento*/}

              <ul className="categories-dropdown">
                <li className="category">ACCESORIOS Y EQUIPAMENTO</li>

                <div className="dropdown">
                  <ul>
                    <li className="bold-sub-category">
                      <b>CAMPING</b>
                    </li>
                    <li>CARPAS</li>
                    <li>SACOS DE DORMIR</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>EQUIPAJE YU MORRALES</b>
                    </li>
                    <li>MORRALES</li>
                    <li>ESCOLARES</li>
                    <li>EXCURSIONISMO</li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>ACCESORIOS</b>
                    </li>
                    <li>BOLSOS Y RIÑONERAS</li>
                    <li>CUELLOS Y BUFANDAS</li>
                    <li>GORRAS Y GORROS</li>
                    <li>GUANTES</li>
                  </ul>
                </div>
              </ul>
              <ul className="categories-dropdown">
                <li className="category">TECNOLOGIAS</li>

                <div className="dropdown">
                  <ul>
                    <li className="bold-sub-category">
                      <b>INNOVACION</b>
                    </li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>SOSTENIBILIDAD</b>
                    </li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>VECTIV</b>
                    </li>
                  </ul>
                  <ul>
                    <li className="bold-sub-category">
                      <b>FUTURELIGHT</b>
                    </li>
                  </ul>
                </div>
              </ul>
              <ul className="categories-dropdown">
                <li className="category">NUEVA COLECCION</li>
              </ul>
              <ul className="categories-dropdown">
                <li className="category">SALE</li>
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
