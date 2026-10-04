/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 10 · Múltiplos y divisibilidad
 */

let contador = 0

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5  !== 0){
        console.log(i)
        contador++;
    }
}

console.log("Contador: ", contador)

// Los primeros 3 valores que aumentan el contador son el 3, 6 y 9
// El bucle termina cuando ya no cumple la condicion(cuando llega a 101)
