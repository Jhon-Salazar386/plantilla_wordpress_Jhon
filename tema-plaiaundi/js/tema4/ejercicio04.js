/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 4 · Del objeto a la clase
 */

console.log("Ejercicio 4");

class Libro {
    constructor(titulo, precio, unidades) {
        this.titulo = titulo;
        this.precio = precio;
        this.unidades = unidades;
    }

    calcularImporte() {
        return this.precio * this.unidades;
    }

    estaDisponible() {
        return this.unidades > 0
    }

}

const libro1 = new Libro("El quijote", 12, 3);

const libro2 = new Libro("Cien años de soledad", 20, 0);

const libros = [libro1, libro2];

const titulos = libros.map(libro => libro.titulo);

console.log("Titulos: ", titulos);

const disponibles = libros.filter(libro => libro.estaDisponible());

console.log("Disponibles: ", disponibles);

const importeTotal = libros.reduce((total, libro) => total + libro.calcularImporte(), 0);

console.log("Importe total: ", importeTotal)
