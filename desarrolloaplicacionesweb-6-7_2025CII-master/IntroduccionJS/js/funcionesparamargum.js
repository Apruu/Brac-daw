//Declaracion de una funcion con parametros
function sumar(numero1, numero2){
    //numero 1 y numero son parametros
    console.log(numero1 + numero2);
}

sumar(10, 20); //10 y 20 son argumentos o valores reales
sumar(50, 100);
sumar(2, 4);

//Expresion de una funcion con parametros
const sumar2 = function(numero1, numero2){
    console.log(numero1 + numero2);
};

sumar2(1, 2);

//declaracion de funcion - parametros por default
const sumar3 = function(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2);
};
sumar3();