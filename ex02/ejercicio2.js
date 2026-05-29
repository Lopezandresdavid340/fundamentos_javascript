/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.

let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.

const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.
*/

var nombre; // declarar una variable con
nombre = "Juan"; // asignar un valor a la variable

var apellido = "Perez"; // declarar e inicializar una variable c
nombre = "juan"; // asignar un nuevo valor a la variable nombre
console.log(nombre); // imprimir "juan"
console.log(apellido); // Imprime "perez"

let edad = 30; // declarar e inicializar una variable con let
console.log(edad); // imprimir 30

edad = 31; // reasignar un nuevo valor a la variable edad
console.log(edad); // imprimir 31

const PI = 3.14159; // declarar una constante
console.log(PI); // imprimir 3.14159