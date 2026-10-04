/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 12 · || frente a ??
 */

const cantidad = 5
const a = cantidad || 10;
const b = cantidad ?? 10;

console.log(a)

console.log(b)

const cant = 0

const resultado = cant ?? 10

console.log(resultado)


// Para el caso, se tendria que utilizar ?? para que solo use el otro valor en caso de sea null o undefined
