/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

console.log(Number("25")) // Number 25
console.log(Number("25.7")) // Number 25,7
console.log(Number("25px")) // Number NaN
console.log(parseInt("25px")) // Number 25
console.log(parseInt("25.7")) // Number(elimina decimales) 25
console.log(parseFloat("25.7kg")) // Number 25.7
console.log(Number("")) // Number 0
console.log(Number(" ")) // Number 0

// Number es estricto, exigue el lo que le pases sea totalmente puro
// mientras que parseint recorre el valor y se detiene cuando detecta 
// un valor que no es un numero