/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 8 · Catalogo modular
 */

import {obtenerNombres, obtenerDisponibles, buscarPorId, calcularValorStock, obtenerNombresDisponibles} from "./logica/catalogo.js";
import {catalogo} from "./data/datos.js";

console.log("Ejercicio 8");

console.log("Array completo: ", catalogo);

console.log("Nombres: ", obtenerNombres(catalogo));

console.log("Disponibles: ", obtenerDisponibles(catalogo))

console.log("Busqueda por id 2: ", buscarPorId(catalogo, 2));
console.log("Busqueda por id 99: ", buscarPorId(catalogo, 99));

console.log(calcularValorStock(catalogo));
console.assert(
    calcularValorStock(catalogo) === 588,
    "El valor inicial debe ser 588"
);

console.log("Nombres disponibles", obtenerNombresDisponibles(catalogo));

const teclado = buscarPorId(catalogo, 1)

console.log("Vender 2 teclados: ", teclado.vender(2), "stock: ", teclado.stock)
console.assert(
    calcularValorStock(catalogo) === 518,
    "Después de vender 2 teclados, el total debe ser 518"
);

console.log("Vender 5 teclados: ", teclado.vender(5), "stock: ", teclado.stock)

console.log("Asignar -3 a stock de teclado: ", teclado.stock = -3, "stock: ", teclado.stock)
