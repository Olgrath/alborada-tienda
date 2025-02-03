import FormularioContacta from "../../components/FormularioContacta/FormularioContacta";
import "./style.css";

const Contacta = () => {
  return (
    <div className="contacta-contenedor">
      <div className="contacta-titulo">
        <h1>Contacta con nosotros</h1>
      </div>
      <div className="formulario-contacta">
        <FormularioContacta />
      </div>
    </div>
  );
};
export default Contacta;
