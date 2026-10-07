/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */

nota = parseFloat(prompt("Ingresa la nota: "))

if (nota < 0 || nota > 10) {
    console.log("La nota debe estar entre 0 y 10")
} else if (nota >= 9) {
    console.log("Sobresaliente")
} else if (nota >= 7) {
    console.log("Notable")
} else if (nota >= 5) {
    console.log("Aprobado")
} else {
    console.log("Suspenso")
}

// Si ponemos primero nota >= 5, si tenemos una nota de 7-8-9, estaria clasificada en aprobada
// Es decir que entra en la primera coincidencia, pero no la mas precisa