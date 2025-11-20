//Arreglos o arrays

const numeros = [1,2,3,4,5,6];//forma comun de crear un arreglo
console.log(numeros);
console.table(numeros); //una forma más legible de ver un arreglo

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');//otra forma de crear un arreglo
console.table(meses);

const arreglo = [
    "Hola",
    true,
    20,
    {nombre: "Apru", apellido: "Enriquez"},
    [1,2,3,4,5,6,7]
];
//dentro de un arreglo puedo tener varios tipos de datos, objetos o arreglos
console.table(arreglo);

//Acceder a los valores de un arreglo -> a traves de su indice
console.log(arreglo[2]);

//conocer el tamaño del arreglo
console.log(numeros.length);

//Iterar todo el arrays con .forEach
numeros.forEach(function(numero){
    console.log(numero);
})

