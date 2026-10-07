/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 11 · Acumulador con while
 */

/*

Pide números repetidamente hasta que el usuario introduzca 0. Al terminar muestra:
• la suma total;
• la cantidad de números introducidos, sin contar el 0;
• la media.
Ejemplo:
Entrada: 10, 5, 20, 0
Salida: suma = 35, cantidad = 3, media = 11.67
Justifica por qué while encaja mejor aquí que un for con un número fijo de repeticiones.


*/

let contador = 0;
let suma = 0;
let media = 0;

while(true){

    let numero = parseInt(prompt("Ingresa un numero: "))

    if(numero == 0){
        console.log("Saliendo")
        break
    }

    contador++

    suma += numero

}

media = suma / contador

console.log("Media= ", media)

// Un while encaja mejor, por el hecho de que no sabemos de antemano cuantos numeros vamos a meter
// Con un for tendriamos que indicar cuantas vueltas habria que hacer