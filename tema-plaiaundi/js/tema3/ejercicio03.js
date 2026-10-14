/*
 * Tema 3 · Funciones arrays y tratamiento de datos
 * Ejercicio 3 · Alumnos aprobados
 */

console.log("Ejercicio 3");

function imprimirArray(array){
    array.forEach(element => {
        console.log(element)
    })
}

const alumnos = [
    {nombre: "Ane", nota: 8},
    {nombre: "Iker", nota: 4},
    {nombre: "June", nota: 7}
]

imprimirArray(alumnos)

function evaluar1(alumno){

    let aprobado = false;

    if(alumno.nota >= 5){
        aprobado = true;
    }

    alumnoRevisado = {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: aprobado
    }

    return alumnoRevisado
}

const evaluar2 = function(alumno) {

    let aprobado = false;

    if(alumno.nota >= 5){
        aprobado = true;
    }

    alumnoRevisado = {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: aprobado
    }

    return alumnoRevisado

}

const evaluar3 = (alumno) => {

    let aprobado = false;

    if(alumno.nota >= 5){
        aprobado = true;
    }

    alumnoRevisado = {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: aprobado
    }

    return alumnoRevisado

}

let alumnos2 = []

/*
alumnos2 = alumnos.map(evaluar3)


alumnos2 = alumnos.map(function(alumno) {
    
    let aprobado = false;

    if(alumno.nota >= 5){
        aprobado = true;
    }

    alumnoRevisado = {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: aprobado
    }

    return alumnoRevisado

})
*/

alumnos2 = alumnos.map(alumno => {
    
    let aprobado = false;

    if(alumno.nota >= 5){
        aprobado = true;
    }

    alumnoRevisado = {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: aprobado
    }

    return alumnoRevisado

})

imprimirArray(alumnos2)
