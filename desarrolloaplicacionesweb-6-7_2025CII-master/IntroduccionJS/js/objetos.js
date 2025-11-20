//Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

//sintaxis de un objeto
const producto ={
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

console.log(producto);
console.log(producto.precio); //acceder a una propiedad del objeto(forma común)
console.log(producto['disponible']); //otra forma de acceder a una propiedad del objeto

producto.imagen = "imagen.jpg"; //agregar una propiedad al objeto
delete producto.categoria; //eliminar una propiedad del objeto
producto.precio = 500; //modificar una propiedad exitestente
console.log(producto);