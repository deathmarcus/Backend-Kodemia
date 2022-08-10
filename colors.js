const colors = require('colors');



/**
 * Crear una funcion que reciba un nombre del proceso.
 * Y en esa misma funcion imprimirla con color arcoiris.
 * Utilizar el paquete colors
 */

 const printVar = (nombre) => {
    console.log(nombre.rainbow);
 }

printVar(process.argv[2]);