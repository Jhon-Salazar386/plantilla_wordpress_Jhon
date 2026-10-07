/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

/*
// El precio de un producto puede variar
let precio;

// El contador va a ir aumentando
let contador = 0;

// El nombre se queda fijo durante la ejecucion
const NOMBRE = "Joan";

// El saldo se va a ir restando
let saldo;

// El porcentaje adicional del IVA es fijo
const IVA = 0.21;

// El resultado sera uno en toda la ejecucion
const RESULTADO = "";
*/

let deposito = 100;

const OPERACIONES = 5;

const LITROS_A_RETIRAR = 7;

for(let i = 0; i < OPERACIONES; i++){
    deposito -= LITROS_A_RETIRAR;
    console.log("Vuelta numero ", (i+1), " = ", deposito)
}