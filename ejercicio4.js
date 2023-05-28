const muebles = ["armario", "silla"];
const numeros = [25, 78];
const booleanos = [true, false];


let cambio1 = muebles[0];
muebles[0] = muebles[1];
muebles[1] = cambio1;

let cambio2 = numeros[0];
numeros[0] = numeros[1];
numeros[1] = cambio2;

let cambio3 = booleanos[0];
booleanos[0] = booleanos[1];
booleanos[1] = cambio3;

console.log([muebles, numeros, booleanos]);

