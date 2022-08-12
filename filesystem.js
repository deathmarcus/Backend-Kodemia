const fs = require('fs');
// fs.writeFile("text.txt", "Archivo creado desde node", "utf8", (err) => {
//     if(err) {
//         console.log("err", err);
//         return
//     };
//     console.log("El Archivo fue creado con exito");
// });

// fs.readFile("text.txt", 'utf8', (err, content) => {
//     if(err) {
//         console.log("error", err);
//         return
//     };
//     console.log(content);
// });

// fs.appendFile("text.txt", "\nEsto es nuevo", "utf8", (err) => {
//     if(err) {
//         console.log("err", err);
//         return;
//     }
//     console.log("Tu archivo fue actualizado con éxito");
// });

// fs.appendFile("index.js", "\nconsole.log('Que onda')", "utf8", (err) => {
//     if(err) {
//         console.log("err", err);
//         return;
//     }
//     console.log("Tu archivo fue actualizado con éxito");
// });
// fs.unlink('text.txt', (err) => {
//     if(err) {
//         console.log("error:", err);
//         return;
//     };
//     console.log('text.txt fue eliminado exitosamente');
// })

// fs.readdir("directorio1", "utf-8", (err, files) => {
//     if(err) throw err;
//     console.log("files:", files);
// });

/* Ejercicio 2
 * Con callbacks
 * 1 - Leer los archivos de un directorio y eliminarlos.
 * - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
 */
// fs.readdir("directorio1", "utf-8", (err, files) => {
//     if(err) throw err;
//     if(files.length === 0){
//         console.log("El directorio esta vacio");
//         return;
//     }
//     files.forEach(element => {
//         let path = `directorio1/${element}`
//         fs.unlink(path, (err) => {
//             if(err) {
//                 console.log("error:". err);
//             };
//             console.log(path, 'fue eliminado exitosamente');
//         });
//     });
// });

/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */
 /* INICIO
 * 1 - Leer el contenido de la carpeta
 * 2 - Ciclar el contenido que recibimos
 * CICLO:
 *     1 - Checar si es una carpeta o no
 *     SI Es carpeta:
 *        Volver a leer el contenido la carpeta
 *        CICLO:
    *        Si esta vacio:
    *           Imprimir que esta vacio       
    *        Si no:
    *           Checar si es una carpeta o no
    * 
 *     SI NO:
 *        Eliminar archivo
 * 
 * FIN
 */

const path = "dir1"
let counter = 0
const removeAll = (path) => {
  //dir1/dir3/dir5
  const content = fs.readdirSync(path, "utf-8")

  content.forEach((file) => {
    const newPath = `${path}/${file}` 
    
    counter += 1 // Para ver cuando es carpeta
    // Checar si algunos de estos files es carpeta o no
    const isDirectory = fs.statSync(`${path}/${file}`).isDirectory()

    // Si es Carpeta
    if(isDirectory) {
      removeAll(newPath)
      fs.rmdirSync(newPath)
      return

    }
    // Si NO -> Que es archivo
    counter -= 1
    fs.unlinkSync(newPath)

  })
  counter -= 1
  console.log("counter aqui", counter)
  if(counter === -1) {
    fs.rmdirSync(path)
  }
}

removeAll(path)