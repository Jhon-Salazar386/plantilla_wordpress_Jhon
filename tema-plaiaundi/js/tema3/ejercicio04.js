/*
 * Tema 3 · Funciones arrays y tratamiento de datos
 * Ejercicio 4 · Consulta de productos
 */

console.log("Ejercicio 4")

const imprimirArray = lista => {
    lista.forEach(element => {
        console.log(element)
    });
}

// Devolvera un array que contiene todos los precios
const obtenerPrecios = lista => lista.map(producto => producto.precio)

// Retornara un array de objetos que coicidan con la condocion de que su precio sea menor a 40
const filtrarProductosPorPrecio = (lista, filtro) => lista.filter(producto => producto.precio < filtro)

// Retornara el primer objeto que cumpla con la condicion de que tenga id 2
const buscarPorId = (lista, id) => lista.find(producto => producto.id === id)

const catalogo = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
   { id: 4, nombre: "Cable", precio: 8, stock: 10 }
 ]

const precios = obtenerPrecios(catalogo)

console.log("Lista de precios")
imprimirArray(precios)

const filtradoProductor = filtrarProductosPorPrecio(catalogo, 40)

console.log("Resultado del filtrado: ")
imprimirArray(filtradoProductor)

const objetoEncontrado = buscarPorId(catalogo, 4);

console.log("Resultado de busqueda: ", objetoEncontrado)
