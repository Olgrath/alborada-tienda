// Utilizamos el mock para simular una base de datos con los productos en stock de la categoria:
export const mockProductos = {
  ofertas: [
    {
      nombre: "Amatista",
      precio: 9,
      precioAnterior: 15,
      imagen:
        "https://vivescortadaimport.com/diccionario-minerales/minerales/amatista/amatista-mineral.jpg",
      alt: "amatista",
      to: "/producto/amatista",
    },
    {
      nombre: "Celestina",
      precio: 15,
      precioAnterior: 20,
      imagen: "https://kunugi.es/mayor/images/drusacelestinag.jpg",
      alt: "celestina",
      to: "/producto/celestina",
    },
    {
      nombre: "Malaquita",
      precio: 10,
      precioAnterior: 15,
      imagen:
        "https://vivescortadaimport.com/blog-tienda-minerales/apartados/el-mineral-en-bruto/malaquita-fibrosa.jpg",
      alt: "malaquita",
      to: "/producto/malaquita",
    },
    {
      nombre: "Rodonita",
      precio: 3,
      precioAnterior: 4,
      imagen:
        "https://geotierra.es/547-large_default/mineral-rodado-rodonita.jpg",
      alt: "rodonita",
      to: "/producto/rodonita",
    },
    {
      nombre: "Fluorita",
      precio: 30,
      precioAnterior: 45,
      imagen:
        "https://marynelis.com/wp-content/uploads/2024/08/punta-de-fluorita-verde-grande.jpg",
      alt: "fluorita",
      to: "/producto/fluorita",
    },
    {
      nombre: "Citrino",
      precio: 15,
      precioAnterior: 20,
      imagen:
        "https://cristalljoia.com/4289-thickbox_default/punta-de-cuarzo-citrino-pc20.jpg",
      alt: "citrino",
      to: "/producto/citrino",
    },
  ],
  drusas_geodas: [
    {
      nombre: "Geoda",
      precio: 15,
      imagen:
        "https://www.reino-minerales.es/wp-content/uploads/2020/08/geode-en-cristal-de-roche.jpg",
      alt: "geoda",
      to: "/producto/geoda",
    },
    {
      nombre: "Celestina",
      precio: 15,
      precioAnterior: 20,
      imagen: "https://kunugi.es/mayor/images/drusacelestinag.jpg",
      alt: "celestina",
      to: "/producto/celestina",
    },
    {
      nombre: "Amatista",
      precio: 9,
      precioAnterior: 15,
      imagen:
        "https://vivescortadaimport.com/diccionario-minerales/minerales/amatista/amatista-mineral.jpg",
      alt: "amatista",
      to: "/producto/amatista",
    },
  ],
  en_bruto: [
    {
      nombre: "Turmalina",
      precio: 22,
      imagen:
        "https://vivescortadaimport.com/diccionario-minerales/minerales/turmalina/turmalina.jpg",
      alt: "turmalina",
      to: "/producto/tumalina",
    },
    {
      nombre: "Malaquita",
      precio: 10,
      precioAnterior: 15,
      imagen:
        "https://vivescortadaimport.com/blog-tienda-minerales/apartados/el-mineral-en-bruto/malaquita-fibrosa.jpg",
      alt: "malaquita",
      to: "/producto/malaquita",
    },
    {
      nombre: "Calcopirita",
      precio: 10,
      imagen:
        "https://vivescortadaimport.com/blog-tienda-minerales/apartados/el-mineral-en-bruto/calcopirita.jpg",
      alt: "calcopirita",
      to: "/producto/calcopirita",
    },
  ],
  rodados: [
    {
      nombre: "Obsidiana",
      precio: 5,
      imagen:
        "https://geotierra.es/2761-large_default/mineral-rodado-obsidiana-negra.jpg",
      alt: "obsidiana",
      to: "/producto/obsidiana",
    },
    {
      nombre: "Jade",
      precio: 4,
      imagen:
        "https://geotierra.es/532-large_default/mineral-rodado-jade-verde.jpg",
      alt: "jade",
      to: "/producto/jade",
    },
    {
      nombre: "Rodonita",
      precio: 3,
      precioAnterior: 4,
      imagen:
        "https://geotierra.es/547-large_default/mineral-rodado-rodonita.jpg",
      alt: "rodonita",
      to: "/producto/rodonita",
    },
  ],
  puntas: [
    {
      nombre: "Cuarzo",
      precio: 10,
      imagen:
        "https://vivescortadaimport.com/diccionario-minerales/minerales/cuarzo-blanco/cuarzo-blanco-mineral.jpg",
      alt: "cuarzo",
      to: "/producto/cuarzo",
    },
    {
      nombre: "Fluorita",
      precio: 30,
      precioAnterior: 45,
      imagen:
        "https://marynelis.com/wp-content/uploads/2024/08/punta-de-fluorita-verde-grande.jpg",
      alt: "fluorita",
      to: "/producto/fluorita",
    },
    {
      nombre: "Citrino",
      precio: 15,
      precioAnterior: 20,
      imagen:
        "https://cristalljoia.com/4289-thickbox_default/punta-de-cuarzo-citrino-pc20.jpg",
      alt: "citrino",
      to: "/producto/citrino",
    },
  ],
  todos: [
    
    {
      nombre: "Geoda",
      precio: 15,
      imagen:
        "https://www.reino-minerales.es/wp-content/uploads/2020/08/geode-en-cristal-de-roche.jpg",
      alt: "geoda",
      to: "/producto/geoda",
    },
    {
      nombre: "Celestina",
      precio: 15,
      precioAnterior: 20,
      imagen: "https://kunugi.es/mayor/images/drusacelestinag.jpg",
      alt: "celestina",
      to: "/producto/celestina",
    },
    {
      nombre: "Amatista",
      precio: 9,
      precioAnterior: 15,
      imagen:
        "https://vivescortadaimport.com/diccionario-minerales/minerales/amatista/amatista-mineral.jpg",
      alt: "amatista",
      to: "/producto/amatista",
    },
    {
        nombre: "Turmalina",
        precio: 22,
        imagen:
          "https://vivescortadaimport.com/diccionario-minerales/minerales/turmalina/turmalina.jpg",
        alt: "turmalina",
        to: "/producto/tumalina",
      },
      {
        nombre: "Malaquita",
        precio: 10,
        precioAnterior: 15,
        imagen:
          "https://vivescortadaimport.com/blog-tienda-minerales/apartados/el-mineral-en-bruto/malaquita-fibrosa.jpg",
        alt: "malaquita",
        to: "/producto/malaquita",
      },
      {
        nombre: "Calcopirita",
        precio: 10,
        imagen:
          "https://vivescortadaimport.com/blog-tienda-minerales/apartados/el-mineral-en-bruto/calcopirita.jpg",
        alt: "calcopirita",
        to: "/producto/calcopirita",
      },
      {
        nombre: "Obsidiana",
        precio: 5,
        imagen:
          "https://geotierra.es/2761-large_default/mineral-rodado-obsidiana-negra.jpg",
        alt: "obsidiana",
        to: "/producto/obsidiana",
      },
      {
        nombre: "Jade",
        precio: 4,
        imagen:
          "https://geotierra.es/532-large_default/mineral-rodado-jade-verde.jpg",
        alt: "jade",
        to: "/producto/jade",
      },
      {
        nombre: "Rodonita",
        precio: 3,
        precioAnterior: 4,
        imagen:
          "https://geotierra.es/547-large_default/mineral-rodado-rodonita.jpg",
        alt: "rodonita",
        to: "/producto/rodonita",
      },
      {
        nombre: "Cuarzo",
        precio: 10,
        imagen:
          "https://vivescortadaimport.com/diccionario-minerales/minerales/cuarzo-blanco/cuarzo-blanco-mineral.jpg",
        alt: "cuarzo",
        to: "/producto/cuarzo",
      },
      {
        nombre: "Fluorita",
        precio: 30,
        precioAnterior: 45,
        imagen:
          "https://marynelis.com/wp-content/uploads/2024/08/punta-de-fluorita-verde-grande.jpg",
        alt: "fluorita",
        to: "/producto/fluorita",
      },
      {
        nombre: "Citrino",
        precio: 15,
        precioAnterior: 20,
        imagen:
          "https://cristalljoia.com/4289-thickbox_default/punta-de-cuarzo-citrino-pc20.jpg",
        alt: "citrino",
        to: "/producto/citrino",
      },
  ],
};
