// console.log(process.argv[2]);
// console.log("hola mundo");

const printVar = (nombre) => {
    if(nombre){
        console.log("Bienvenido ", nombre);
        return;
    }
        console.log("Afuera de Aqui");
    };

printVar(process.argv[2]);