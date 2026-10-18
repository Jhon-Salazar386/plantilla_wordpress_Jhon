/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 2 · El receptor de un método
 */

console.log("Ejercicio 2");

const cuenta1 = {
    titular: "Marcelo",
    saldo: 38,

    describir() {
        return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
    }

}

const cuenta2 = {
    titular: "Dayana",
    saldo: 45
}

cuenta2.describir = cuenta1.describir;

console.log("Cuenta2", cuenta2.describir());

/*
const describirF = cuenta1.describir;

console.log(describirF())
*/


