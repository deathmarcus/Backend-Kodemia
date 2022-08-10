const fs = require('fs');
fs.writeFile("text.txt", "Archivo creado desde node", "utf8", (err) => {
    if(err) {
        console.log("err", err);
        return
    };
    console.log("El Archivo fue creado con exito");
});