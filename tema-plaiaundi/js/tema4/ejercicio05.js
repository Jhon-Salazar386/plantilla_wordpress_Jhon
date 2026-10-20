/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 5 · Proteger el stock
 */

console.log("Ejercicio 5")

class Producto {
    #stock;

    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get stock() {
        return this.#stock;
    }

    set stock(valor) {
        if(Number.isInteger(valor) && valor >= 0){
            this.#stock = valor
        }
    }

    vender(unidades) {
        if(Number.isInteger(unidades) && unidades > 0 && unidades <= this.#stock){
            this.#stock -= unidades;
            return true;
        }
        return false;
    }

    estaDisponible() {
        return this.#stock > 0;
    }

    calcularValorStock() {
        return this.precio * this.#stock;
    }

}

const teclado = new Producto(1, "Teclado", 35, 4);
teclado.stock = 8;	// 8
console.log(teclado.stock);
teclado.stock = -1;   // sigue 8
console.log(teclado.stock);
teclado.stock = 2.5;  // sigue 8
console.log(teclado.stock);
teclado.stock = "6";  // sigue 8
console.log(teclado.stock);

/*

// Caso valido para cambiar valor de stock

teclado.stock = 6; 
console.log(teclado.stock);
*/
