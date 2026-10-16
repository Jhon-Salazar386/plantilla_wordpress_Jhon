/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 1 · Objeto literal y métodos
 */

console.log("Ejercicio 1")

const libro = {
    titulo: "Git para principiantes",
    precio: 12,
    unidades: 3,

    carlcularImporte() {
        return this.precio * this.unidades;
    }
}

console.log("Titulo: ", libro.titulo);
console.log("Precio: ", libro.precio);
console.log("Unidades: ", libro.unidades);
console.log("Importe: ", libro.carlcularImporte());

libro.editorial = "Grupo planeta";

const campo = "editorial"

console.log("Editorial agregada: ", libro[campo]);

delete libro.editorial;

console.log("Editorial eliminada: ", libro.editorial);
