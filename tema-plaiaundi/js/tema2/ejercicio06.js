/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

const aplicarDescuento = (importe) => {

    let porcentaje = 0;

    if(importe < 50){
        porcentaje = 0
    } else if(importe >= 50 && importe < 100){
        porcentaje = 0.05
    } else if(importe >= 100 && importe < 200){
        porcentaje = 0.10
    } else {
        porcentaje = 0.15
    }

    let descuento = importe * porcentaje

    console.log(descuento)

    return importe - descuento
}

let importe = parseFloat(prompt("Ingresa importe: "))

let importeConDescuento = aplicarDescuento(importe)

console.log(importeConDescuento)