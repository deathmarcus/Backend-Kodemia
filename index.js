//HTTP
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.write("Hola, Bienvenido al get de Home");
    response.end();
});
app.listen("8080", () => {
    console.log("Servidor escuchando");
});



// Se crea un servidor http

//5 Endpoints
// GET
// POST
// PATCH
// PUT 
// DELETE

// const server = http.createServer((request, response) => {
//     const { url, method } = request
//     const endpoints  = {
//         "GET": {
//             "/": "Bienvenido estas en GET en HOME",
//             "/profile": "Bienvenido estas en GET en profile"
//         },
//         "POST": {
//             "/": "Bienvenido estas en POST en HOME",
//             "/profile": "Bienvenido estas en POST en profile"
//         },
//         "PATCH": {
//             "/": "Bienvenido estas en PATCH en HOME",
//             "/profile": "Bienvenido estas en PATCH en profile"
//         },
//         "PUT": {
//             "/": "Bienvenido estas en PUT en HOME",
//             "/profile": "Bienvenido estas en PUT en profile"
//         },
//         "DELETE": {
//             "/": "Bienvenido estas en DELETE en HOME",
//             "/profile": "Bienvenido estas en DELETE en profile"
//         }
//     };
//     response.write(endpoints[method][url]);
//     response.end();
    
    // Respondo
//     if(method === "GET" && url === "/") {
//         response.write("Bienvenido estás en el GET, en home, estás leyendo");
//         response.end(); //Ya se finalizo toda la respuesta
//     } else if(method === "POST" && url === "/") {
//         response.write("Bienvenido estás en el POST, en home, estás creando");
//         response.end(); //Ya se finalizo toda la respuesta
//     } else if(method === "PATCH" && url === "/") {
//         response.write("Bienvenido estás en el PATCH, en home, estás actualizando");
//         response.end(); //Ya se finalizo toda la respuesta
//     }else if(method === "PUT" && url === "/") {
//         response.write("Bienvenido estás en el PUT, en home, estás reemplazando");
//         response.end(); //Ya se finalizo toda la respuesta)
//     } else if(method === "DELETE" && url === "/") {
//         response.write("Bienvenido estás en el DELETE, en home, estás borrando");
//         response.end(); //Ya se finalizo toda la respuesta
//     } else {
//         response.write("Esta ruta no existe");
//         response.end();
//     }
// });

// Poner ese servidor a escuchar
// Parametros
// 1- PORT
// 2- callback

// server.listen(8080, ()=> {
//     console.log("Server listening...");
// });