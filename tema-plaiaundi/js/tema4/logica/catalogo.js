export const obtenerNombres = lista => lista.map(producto => producto.nombre)

export const obtenerDisponibles = lista => lista.filter(producto => producto.estaDisponible())

export const buscarPorId = (lista, id) => lista.find(producto => producto.id === id);

export const calcularValorStock = lista => lista.reduce((total, producto) => total + producto.calcularValorStock(), 0);

export const obtenerNombresDisponibles = (lista) => obtenerNombres(obtenerDisponibles(lista));
