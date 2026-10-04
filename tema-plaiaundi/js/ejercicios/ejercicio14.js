/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 14 · Diagnóstico de código
 */

const precio = Number(prompt("Precio del producto"));
const unidades = Number(prompt("Número de unidades"));

const subtotal = precio * unidades;
let descuento = 0;

if (subtotal >= 100) {
    descuento = subtotal * 0.10;
}

const total = subtotal - descuento;

console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("Total:", total);

// El problema es un fallo de logica a la hora de aplicar el descuento, siendo que solo se aplica para un subtotal mayor a 100
// La condicion exige que se aplique en compras de 100 o mas, pero la condicion que se ejecutaba era a compras de mas de 100
