//Strng o cadenas de texto
const producto = "Monitor de 20 pulgadas"; //es lo más común usar comillas dobles
const producto0 = 'Monitor de 20 pulgadas'; //comillas sencillas también son válidas
const producto1 = 'Monitor de 30 pulgadas"'; //poder usar comillas dentro de un string
const producto2 = String("Monitor de 45 pulgadas"); //usando la clase String
const producto3 = new String("Monitor de 60 pulgadas"); //usando el constructor de la clase String, cuando uso new se crea un objeto

console.log(producto);
console.log(producto2);
console.log(producto3);

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);

