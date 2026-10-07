/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

num1 = parseFloat(prompt("Ingresa primer numero: "))
num2 = parseFloat(prompt("Ingresa segundo numero: "))

try{

    if(Number.isNaN(num1) || Number.isNaN(num2)){
        throw new Error("Valor ingresado no valido(NaN)")
    }

    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)

}catch(error){
    console.log(error)
}

// Al cancelar uno de los promps, se asigna por default el NaN