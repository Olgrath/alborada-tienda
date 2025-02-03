import Producto from "../../components/producto/Producto";
import { useParams } from "react-router";
import { mockProductos } from "./mock_productos";

import "./style.css";

const Productos = () => {
  // use params te pertmite coger una variable de un path "/ruta/:variable"
  const { categoria } = useParams();

  // Pillamos del objeto mock segun la categoria.
  const productos = mockProductos[categoria];

  return (
    <div className="productos">
      <header className="productos-header">
        <h1>Nuestros productos</h1>
      </header>
      <div className="productos-lista">
        {/* Si hay productos y tiene una longitud entonces pintamos la lista de productos, si no, pintamos que no se encuentran */}
        {productos && productos.length ? (
          productos.map((producto) => (
            <Producto
              nombre={producto.nombre}
              precioAnterior={producto.precioAnterior}
              precio={producto.precio}
              imagen={producto.imagen}
              alt={producto.alt}
              to={producto.to}
            />
          ))
        ) : (
          <p>No se encuentran productos</p>
        )}
      </div>
    </div>
  );
};
export default Productos;
