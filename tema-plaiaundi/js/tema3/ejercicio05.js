/*
 * Tema 3 · Funciones arrays y tratamiento de datos
 * Ejercicio 5 · Catalogo de productos
 */

console.log("Ejercicio 5")

const imprimirArray = lista => {
    lista.forEach(element => {
        console.log(element)
    });
}

const obtenerNombres = lista => lista.map(elemento => elemento.nombre)

const obtenerDisponibles = lista => lista.filter(elemento => elemento.stock > 0)

const buscarPorId = (lista, id) => lista.find(producto => producto.id === id)

const calcularValorStock = lista => lista.reduce((suma, producto) => suma + producto.precio * producto.stock, 0)

const obtenerNombresDisponibles = (lista) => obtenerNombres(obtenerDisponibles(lista))

const catalogo = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
   { id: 4, nombre: "Cable", precio: 8, stock: 10 }
 ]

const nombreProductos = obtenerNombres(catalogo)

console.log("Listado de nombres de productos")
imprimirArray(nombreProductos)

const disponibles = obtenerDisponibles(catalogo);

console.log("Listado de productos en stock")
imprimirArray(disponibles)

const resultadoBusqueda = buscarPorId(catalogo, 2)

console.log("Resultado de busqueda por id: ", resultadoBusqueda)

const valorTotalStock = calcularValorStock(catalogo)

console.log("Valor total del stock: ", valorTotalStock)

const nombresDisponibles = obtenerNombresDisponibles(catalogo)

imprimirArray(nombresDisponibles)

console.log("Comprobacion final del array")
imprimirArray(catalogo)
