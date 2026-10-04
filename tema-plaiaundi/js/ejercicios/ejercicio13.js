/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 13 · Operador ternario: cuándo ayuda y cuándo no
 */

/*

Ejercicio 13. Operador ternario: cuándo ayuda y cuándo no
Reescribe mediante el operador ternario:
let mensaje;

if (edad >= 18) {
    mensaje = "Mayor de edad";
} else {
    mensaje = "Menor de edad";
}
Después intenta representar con ternarios una clasificación de notas: Sobresaliente, Notable, Aprobado y Suspenso. Compara el resultado con una versión if / else if y explica cuál consideras más legible y por qué


*/

const edad = 18

let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad"

console.log(mensaje)


const nota = 9

let resultado = nota >= 9 ? "Sobresaliente" : nota >= 7 ? "Notable" : nota >= 5 ? "Aprobado" : "Suspenso";

console.log(resultado)

// El operador ternario es de ayuda cuando solo estamos trabajando con condiciones simples, pero a la hora de trabajar con varias condiciones, if es mas legible y limpio
