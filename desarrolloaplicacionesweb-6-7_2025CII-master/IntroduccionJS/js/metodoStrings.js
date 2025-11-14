//Strng o cadenas de texto
const producto = "Monitor de 20 pulgadas"; 
const producto2 = "Mouse";

console.log(producto.length); //propiedad length para conocer la longitud/tamaño de un string

//IndexOf() me permite encontrar un elemento dentro de un string, el indice empieza en 0 (retornar la posicion)
console.log(producto.indexOf("s")); 
console.log(producto.indexOf("w")); //va a salir -1 porque no existe
console.log(producto.indexOf("o"));

//Includes (retorna true o false si encuentra el valor dentro del string)
console.log(producto.includes("20"));
console.log(producto.includes("21"));