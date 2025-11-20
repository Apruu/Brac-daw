const numeros = [1,2,3,4,5,6];
console.table(numeros); 
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

//añadir elementos en un arreglo
//no recomendada
numeros[6] = 60; //forma no recomendada
numeros[2] = 10; //va a reemplazar el valor si ya existe el indice
console.table(numeros);

//no recomendada con push
numeros.push(30);//agregar al final del arreglo
numeros.push(40,41,42);//agregar varios elementos al final

//no recomendada con unshift 
numeros.unshift(20, 10, -5);//agregar al inicio del arreglo

//eliminar elementos de un arreglo
numeros.pop();//elimina el ultimo elemento del arreglo
numeros.shift();//elimina el primer elemento del arreglo

console.table(numeros);
numeros.splice(2, 2);//elimina desde el indice indicado antes de la coma, despues de la coma es la cantidad de elementos a eliminar desde ese indice

//Spread operator -> recomendada
const nuevosNumeros = [100, 200,...numeros, 10];//buena practica ya que no modificamos el arreglo original



console.table(numeros);
console.table(nuevosNumeros);