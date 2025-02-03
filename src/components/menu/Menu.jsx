import "./style.css";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <header className="menu-contenedor">
      <img
        className="logo-encabezado"
        src="/imagenes/Logo.tienda.horizontal.png"
        alt="logo"
      />
      <nav className="menu-enlaces">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/todos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/ofertas">Ofertas</NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-iconos">
        <ul class="nav">
          <li class="menu-desplegable">
            <NavLink to="/usuario">
              <img
                className="menu-icono"
                src="/imagenes/usuario.png"
                alt="usuario"
              />
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/login">Iniciar Sesión</NavLink>
              </li>
              <li>
                <NavLink to="/register">Registrarse</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/carrito">
              <img
                className="menu-icono"
                src="/imagenes/carrito.png"
                alt="carrito"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/buscador">
              <img className="menu-icono" src="/imagenes/lupa.png" alt="lupa" />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
