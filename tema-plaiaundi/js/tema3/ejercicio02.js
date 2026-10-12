/*
 * Tema 3 · Funciones arrays y tratamiento de datos
 * Ejercicio 2 · Suma, media y aprobados
 */

console.log("Ejercicio 2")

const numeros = [5, 8, 3, 10, 6]

let suma = 0;

let aprobados = 0

for(const nota of numeros){
    
    if(nota >= 5) {
        aprobados++
    }
    
    suma += nota

}

console.log(numeros.length)

if(numeros.length > 0) {
    media = suma / numeros.length
}

console.log("Suma: ", suma)
console.log("Media: ", media)
console.log("Aprobados: ", aprobados)
