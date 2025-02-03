import "./style.css";
import { NavLink } from "react-router";

const Categoria = ({ titulo, texto, boton, url, to }) => {

  return (
    <div
      className="categoria-contenedor"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          `url(${url})`,
      }}
    >
      <div class="categoria-contenido">
        <h2 className="categoria-titulo">{titulo}</h2>
        <p className="categoria-texto">{texto}</p>
        <NavLink className="categoria-boton" to={to}>{boton}</NavLink>
      </div>
    </div>
    
  );
};
export default Categoria;
