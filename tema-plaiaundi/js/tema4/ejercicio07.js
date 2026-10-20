/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 7 · Separar archivos
 */

console.log("Ejercicio 7");

import {Producto} from "./modelos/producto.js";
import {ProductoConRecargo} from "./modelos/productoConRecargo.js";

const teclado = new Producto(1, "Teclado", 35, 4);
const raton = new ProductoConRecargo(2, "Ratón", 10, 2);

const productos = [teclado, raton];

console.log("Valor del teclado:", teclado.calcularValorStock());

console.log("Valor del ratón:", raton.calcularValorStock());

const valorTotal = productos.reduce((total, producto) => total + producto.calcularValorStock(), 0);

console.log("Valor total:", valorTotal);
