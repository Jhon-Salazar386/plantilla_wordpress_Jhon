/*
 * Tema 4 · Cliente tema 4
 * Ejercicio 3 · Referencia o copia
 */

console.log("Ejercicio 3");

const producto = {
    nombre: "Reloj",
    precio: 10,
    proveedor: {nombre: "prov"}
}

const aliasProducto = producto;
aliasProducto.precio = 20;

const copiaProducto = {... producto};
copiaProducto.precio = 30;

copiaProducto.proveedor.nombre = "copiaProv";

console.log("Original: ", producto);
console.log("Alias: ", aliasProducto);
console.log("Copia:", copiaProducto);

const copiaIndependiente = {
    ...producto,
    proveedor: {...producto.proveedor}
}

copiaIndependiente.proveedor.nombre = "otroProv";

console.log("Copia Independiente", copiaIndependiente);

const {nombre: nombreProducto, precio} = producto;

console.log("Nombre: ", nombreProducto);
console.log("Precio: ", precio);
