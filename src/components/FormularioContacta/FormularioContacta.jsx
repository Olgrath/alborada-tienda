import "./style.css";

const Contacta = () => {
  return (
    <div className="form-contacta">
      <h1 className="form-contacta-title">Ponte en contacto con nosotros</h1>
      <form method="post" className="form-contacta-form">
        <label for="nombre" className="form-contacta-label">
          Nombre:
        </label>
        <input
          className="form-contacta-input"
          type="text"
          name="nombre"
          id="nombre"
        />
        <label for="apellido" className="form-contacta-label">
          Apellidos:
        </label>
        <input
          className="form-contacta-input"
          type="text"
          name="apellido"
          id="apellido"
        />
        <label for="comentarios" className="form-contacta-label">
          Comentarios:
        </label>
        <textarea
          className="form-contacta-textarea"
          name="comentarios"
          id="comentarios"
        />
        <input type="text" name="comentarios" className="form-contacta-input" />
        <button className="form-contacta-button">Enviar</button>
      </form>
    </div>
  );
};
export default Contacta;
