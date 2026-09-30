/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

let nombre = prompt("Ingresa tu nombre: ")
let edad = Number(prompt("Ingrese su edad: "))
let altura = Number(prompt("Ingrese su altura: "))

console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(altura))

// Al realizar promp sin ningun tipo de cast, por defecto
// Se guarda un valor de tipo string
