/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 5 · Igualdad estricta y coerción
 */

console.log(5 === 5) //True
console.log(5 === "5") //False
console.log(5 == "5") //True
console.log(0 === false) //false
console.log(0 == false) //True
console.log("" === false) //false
console.log("" == false) //true
console.log(null === undefined) //false
console.log(null == undefined) //true

//Se utiliza === porque asi podemos comparar los datos tanto
//por su valor como por su tipo, es decir, es mas estricta
