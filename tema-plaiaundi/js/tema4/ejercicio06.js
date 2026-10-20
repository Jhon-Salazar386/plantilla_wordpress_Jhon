/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 6 · Herencia y polimorfismo
 */

console.log("Ejercicio 6");

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

class ProductoConRecargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}

const teclado = new Producto(1, "Teclado", 35, 4);
const raton = new ProductoConRecargo(2, "Raton", 10, 2);

const productos = [teclado, raton]

const valorTotal = productos.reduce((total, producto) => total + producto.calcularValorStock(), 0)

console.log("Valor total: ", valorTotal)
