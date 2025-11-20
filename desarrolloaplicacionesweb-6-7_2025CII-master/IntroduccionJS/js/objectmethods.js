"use strict";//se debe usar las buenas practicas de JS, si no se marca un error


//sintaxis de un objeto
const producto ={
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

//los objetos por defectos si se pueden modificar a pesar de ser const

//Object.freeze(producto);//con esto se congela el objeto y no se puede modificar
//Con freeze no se pueden agregar, eliminar o modificar propiedades 
//Con freeze tampoco se pueden cambiar valores
console.log(Object.isFrozen(producto));//devuelve true si el objeto esta congelado

Object.seal(producto);//con esto el objeto no puede agregar o eliminar propiedades, pero si cambiar valores
producto.precio = 400;//si se puede modificar el valor
console.log(producto.precio);