import Categoria from "../../components/Categoria/Categoria";
import "./style.css";

const Inicio = () => {
  return (
    <div className="inicio-contenedor">
      <div className="inicio-paragraph">
        <img
          className="logo-inicio"
          src="/imagenes/Logo.tienda.png"
          alt="logo"
        />
        <p className="paragraph">
          Descubre nuestros minerales cuidadosamente selecionados para ofrecer
          lo mejor de la naturaleza.
        </p>
      </div>

      <div className="inicio-categorias">
        <Categoria
          titulo="Drusas y Geodas"
          texto="Descubre la magia de estas formaciones unicas"
          boton="comenzar"
          url="https://vivescortadaimport.com/diccionario-minerales/minerales/cuarzo-blanco/cuarzo-blanco.jpg"
          to="/categoria/drusas_geodas"
        />
        <Categoria
          titulo="En bruto"
          texto="la esencia pura de los minerales en su forma mas natural"
          boton="comenzar"
          url="https://vivescortadaimport.com/diccionario-minerales/minerales/bismuto/bismuto.jpg"
          to="/categoria/en_bruto"
        />

        <Categoria
          titulo="Rodados"
          texto="piezas meticulosamentes pulidas sin perder su naturaleza autentica"
          boton="comenzar"
          url="https://vivescortadaimport.com/diccionario-minerales/minerales/jaspe-mokaita/jaspe-mokaita.jpg"
          to="/categoria/rodados"
        />

        <Categoria
          titulo="Puntas"
          texto="Estos minerales en punta no pueden faltar en tu coleccion"
          boton="comenzar"
          url="https://media.litosphera.com/c/product/punta-de-pirita-ref2-520x520_fGEee4P.jpg"
          to="/categoria/puntas"
        />
      </div>

      <div className="social-links">
        <a href="https://www.instagram.com">
          <img
            className="social-links-icon"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com">
          <img
            className="social-links-icon"
            src="https://cdn-icons-png.flaticon.com/512/889/889102.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.tik-tok.com">
          <img
            className="social-links-icon"
            src="https://cdn-icons-png.flaticon.com/512/3046/3046129.png"
            alt="tiktok"
          />
        </a>
        <a href="https://www.gmail.com">
          <img
            className="social-links-icon"
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="email"
          />
        </a>
      </div>
    </div>
  );
};

export default Inicio;
