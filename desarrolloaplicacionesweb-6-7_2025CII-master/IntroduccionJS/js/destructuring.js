
//sintaxis de un objeto
const producto ={
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

//forma anterior
const precioProducto = producto.precio;
console.log(precioProducto);

//Forma nueva -> destructuring
const {nombreProducto, precio, disponible, categoria} = producto;
//debe tener el mismo nombre que la propiedad 
console.log(nombreProducto);
console.log(categoria);