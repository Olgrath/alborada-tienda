import "./style.css";
import { NavLink } from "react-router";

const Producto = ({ imagen, alt, nombre, precioAnterior, precio, to }) => {
  return (
    <NavLink to={to} className="producto">
      <img src={imagen} alt={alt} />
      <h3>{nombre}</h3>
      <p>
        Precio: {precioAnterior ? <del>{precioAnterior}</del> : <></>} {precio}€
      </p>
    </NavLink>
  );
};

export default Producto;
