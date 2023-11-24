const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const contenedorProductos = [
  {
    id: 1,
    nombre: "Café Capuccino",
    precio: 1800,
    img: "../multimedia/capuccino.jpg",
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
    nombre: "Café con Leche",
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
let carrito= [];
contenedorProductos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card"
  content.innerHTML = `
    <img src="${product.img}">
    <h3> ${product.nombre}<h3>
    <p class= "price">${product.precio}$<p>
    `;
  shopContent.append(content);

   let comprar = document.createElement("button")
   comprar.innerText = "comprar";
   comprar.innerHTML = "comprar"

   content.append(comprar);

   comprar.addEventListener("click", () =>{
    carrito.push({
      id : product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    });
    console.log(carrito);
   });
});
verCarrito.addEventListener("click" , () =>{
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader"
  modalHeader.innerHTML = `
  <h2 class = "modal-heade-title">carrito</h2>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h2");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";
  modalbutton.addEventListener("click" , () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);


  carrito.forEach((product) => {
    let carritoContent = document.createElement ("div");
    carrito.className = "modal-content"
    carritoContent.innerHTML = `
    <img src ="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    `;
    modalContainer.append(carritoContent);
  });
  const total = carrito.reduce((acc,el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `total a pagar : ${total}$`;
  modalContainer.append(totalBuying);

});