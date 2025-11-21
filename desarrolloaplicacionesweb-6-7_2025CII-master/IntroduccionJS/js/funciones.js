//1. Declaracion de una funcion
function sumar(){
    console.log(10 + 10);
}

//llamar a  una funcion
sumar();

//2. Expresion de una funcion
const sumar2 = function(){
    console.log(3 + 3);
}

//llamar a la funcion
sumar2();

//IIFE (Inmediately Invoked Function Expression)
//Una IIEF es una funcion que se define y se ejecuta inmediatamente despues de ser creada
//Solo son accedidas desde este archivo al ser anonimas
(function(){
    console.log("Esto es una funcion");
})();

//Hoisting

saludar();

const saludar = function(){
    console.log("Hola");
};
