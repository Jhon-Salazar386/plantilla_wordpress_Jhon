/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 9 · Menú con switch
 */

let opcion = prompt("Elige una opcion: A - Alta, B - Baja, C - Consultar, S - Salir");

switch (opcion.toUpperCase()) {
    case "A":
        console.log("Has seleccionado Alta");
        break;

    case "B":
        console.log("Has seleccionado Baja");

    case "C":
        console.log("Has seleccionado Consultar");
        break;

    case "S":
        console.log("Has seleccionado Salir");
        break;

    default:
        console.log("Opción no válida");
        break;
}

// Al no haber un break, se ejecuta el siguiente caso aunque no lo elijieramos
