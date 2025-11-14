//Orden de operaciones

let resultado;

//es identico en la vida real
resultado = 20 + 30 * 2; //multiplicacion primero por orden de operaciones
resultado = (20 + 30) * 2; //lo que esta en parentesis se resuelve primero

resultado = (20 + 30 + 100) * 0.2;

console.log(resultado);

//Operadores de incremento y decremento

let puntaje = 10;
puntaje++; //incremento en 1
console.log(puntaje);
console.log(++puntaje); //Si se coloca antes ++ primero incrementa y luego muestra y viceversa

puntaje--; //decremento en 1
console.log(puntaje);

puntaje += 10; //--> puntaje = puntaje + 10
console.log(puntaje);