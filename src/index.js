import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import VistaProducto from "./pages/VistaProducto/VistaProducto";
import Carrito from "./pages/Carrito/Carrito";
import Contacta from "./pages/Contacta/Contacta";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="pagina">
        <Menu />
        <div className="rutas">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/categoria/:categoria" element={<Productos />} />
            <Route path="/producto/:producto" element={<VistaProducto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/contacta" element={<Contacta />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
