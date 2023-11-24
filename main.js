const contenedorProductos = [
  {
    id: 1,
    nombre: "Café Capuccino",
    precio: 1800,
    img: "file:///C:/Users/Usuario/Desktop/chino/proyecto%20java/multimedia/Cappuccino-1.png",
  },
  {
    id: 2,
    nombre: "Café Expreso",
    precio: 1300,
    img: "../multimedia/expreso.webp",
  },
  {
    id: 3,
    nombre: "Café Mocca",
    precio: 2000,
    img: "../multimedia/mocca.jpg",
  },
  {
    id: 4,
    nombre: "Café Macchiato",
    precio: 1900,
    img: "../multimedia/macchiatto.webp",
  },
  {
    id: 5,
    nombre: " Chocolate Caliente",
    precio: 1400,
    img: "../multimedia/chocolate.jpg",
  },
  {
    id: 6,
    nombre: "Café Fapuccino",
    precio: 1800,
    img: "../multimedia/frapuccino.avif",
  },
  {
    id: 7,
    nombre: "Café con Leche<",
    precio: 1600,
    img: "../multimedia/cafe con leche.jpg",
  },
  {
    id: 8,
    nombre: "Submarino",
    precio: 2800,
    img: "../multimedia/submarino.jpeg",
  },
  {
    id: 9,
    nombre: "Café Latte",
    precio: 1800,
    img: "../multimedia/desk.webp",
  },
  {
    id: 10,
    nombre: "Licuado de frutilla",
    precio: 1300,
    img: "../multimedia/smoothie_pepino.jpg",
  },
  {
    id: 11,
    nombre: "Jugo de manzana y pepino",
    precio: 1600,
    img: "../multimedia/zumo-de-manzana-y-pepino.jpg",
  },
  {
    id: 12,
    nombre: "Licuado  de Banana",
    precio: 1800,
    img: "../multimedia/Licuados.webp",
  },
];
contenedorProductos.forEach((item) => {
  let content = document.createElement("div");
  content.innerHTML = `
    <img src="${product.img}">
    <h3> ${product.nombre}<h3>
    <p>${product.precio}$<p>
    `;
  contenedorProductos = append(content);
});
