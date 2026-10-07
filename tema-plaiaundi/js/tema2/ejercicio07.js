/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 7 · Truthy y falsy
 */

/*

0 // No entra
1 // Si entra
-1 // Si entra
"" // No entra
"hola" // Si entra
null // No entra
undefined // No entra
NaN // No entra
"0" // Si entra

*/

let nombre = prompt("Ingresa un nombre: ")

if(nombre){
    console.log("Nombre recibido")
}else {
    console.log("Nombre no recibido")
}

// 0 sin las commillas, se considera un false, pero "0" es considerado un string