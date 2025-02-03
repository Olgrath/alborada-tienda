import "./style.css";

const VistaProducto = () => {
  return (
    <div className="vistaproducto-contenedor">
      <header className="vistaproducto-header">Geoda</header>
      <div className="vistaproducto-producto">
        <aside className="vistaproducto-aside">
          <img
            className="vistaproducto-imagen-producto"
            src="https://www.reino-minerales.es/wp-content/uploads/2020/08/geode-en-cristal-de-roche.jpg"
          />
          <p>Precio: 15€</p>
          <button className="vistaproducto-boton">Agregar al carrito</button>
          <button className="vistaproducto-boton">
            Agregar a la lista de deseos
          </button>
        </aside>
        <div className="vistaproducto-contenido">
          <table className="tabla-mineral">
            <thead>
              <tr>
                <th colspan="3">Datos de interes</th>
              </tr>
              <tr>
                <th>Descripción</th>
                <th>Dimensiones</th>
                <th>Procedencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Geoda de cuarzo</td>
                <td>10x15 cm</td>
                <td>Brasil</td>
              </tr>
            </tbody>
          </table>
          <video className="video-vistaproducto" controls>
            <source src="/Video/video-geoda.mp4" type="video/mp4" />
          </video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yRuReziJhZ4"  allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default VistaProducto;
