// Operadores matematicos

let a, b;
let c, d;

let suma, resta, multiplicacion, div, residuo, potencia;

// obtener los datos a traves del usuario
a = prompt( 'Ingrese un numero: ');
b = prompt( 'Ingrese otro numero: ');

// Resultados de las operaciones
suma = a + b; // Aqui la operacion da un error debido a que se concatenan los datos
document.write("La suma es: ", suma,"<br> ");
console.log("La suma es: ", suma);


resta = a - b;
document.write("La resta es: ", resta);
console.log("La resta es: ", resta);

mult = a * b;
document.write("La multiplicacion es: ", mult,"<br> ");
console.log("La multiplicacion es: ", mult);

div = a / b;
document.write("La division es: ", div,"<br> ");
console.log("La division es: ", div);


residuo = a % b;
document.write("El residuo es: ", residuo,"<br> ");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia,"<br> ");
console.log("La potencia es: ", potencia);

//Obtener los datos a traves del usuario
c = parseFloat(prompt( 'Ingrese un numero: '));
d = parseFloat(prompt( 'Ingrese otro numero: '));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son:",
   "Suma: ", suma, "<br>",
   "Resta: ", resta, "<br>",
   "Multiplicacion: ", mult, "<br>",
   "Division: ", div, "<br>",
   "Residuo: ", residuo, "<br>",
   "Potencia: ", potencia, "<br>"
);

console.log("Los resultados de las operaciones son:",
    "Suma: ". suma,
    "Resta: ", resta,
    "Multiplicacion: ", mult,
    "Division: ", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia
);
