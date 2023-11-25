const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const contenedorProductos = [
  {
    id: 1,
    nombre: "Café Capuccino",
    precio: 1800,
    img: "../multimedia/capuccino.jpg",
    cantidad:1,
  },
  {
    id: 2,
    nombre: "Café Expreso",
    precio: 1300,
    img: "../multimedia/expreso.webp",
    cantidad:1,
  },
  {
    id: 3,
    nombre: "Café Mocca",
    precio: 2000,
    img: "../multimedia/mocca.jpg",
    cantidad:1,
  },
  {
    id: 4,
    nombre: "Café Macchiato",
    precio: 1900,
    img: "../multimedia/macchiatto.webp",
    cantidad:1,
  },
  {
    id: 5,
    nombre: " Chocolate Caliente",
    precio: 1400,
    img: "../multimedia/chocolate.jpg",
    cantidad:1,
  },
  {
    id: 6,
    nombre: "Café Fapuccino",
    precio: 1800,
    img: "../multimedia/frapuccino.avif",
    cantidad:1,
  },
  {
    id: 7,
    nombre: "Café con Leche",
    precio: 1600,
    img: "../multimedia/cafe con leche.jpg",
    cantidad:1,
  },
  {
    id: 8,
    nombre: "Submarino",
    precio: 2800,
    img: "../multimedia/submarino.jpeg",
    cantidad:1,
  },
  {
    id: 9,
    nombre: "Café Latte",
    precio: 1800,
    img: "../multimedia/desk.webp",
    cantidad:1,
  },
  {
    id: 10,
    nombre: "Licuado de frutilla",
    precio: 1300,
    img: "../multimedia/smoothie_pepino.jpg",
    cantidad:1,
  },
  {
    id: 11,
    nombre: "Jugo de manzana y pepino",
    precio: 1600,
    img: "../multimedia/zumo-de-manzana-y-pepino.jpg",
    cantidad:1,
  },
  {
    id: 12,
    nombre: "Licuado  de Banana",
    precio: 1800,
    img: "../multimedia/Licuados.webp",
    cantidad:1,
  },
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


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

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if(repeat){
      carrito.map((prod)=> {
        if(prod.id = prod.id){
          prod.cantidad++;
        } 
      });
    } else{
      carrito.push({
        id : product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad:product.cantidad,
      });
    }
    console.log(carrito);
    carritoCounter();
    saveLocal();
   });
});

const saveLocal = () =>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
};


