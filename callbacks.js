/**
 * 1- Pedir informes
 * 2- Entrevista
 * 3- Pagar (becado)
 * 4- Inscripcion
 */

// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false
// }

// const darInformes = (koderADarInformes) => {
//     koderADarInformes.seDieronInformes = true;
//     return koderADarInformes;
// };

// const entrevistar = (koderAEntrevistar) => {
//     koderAEntrevistar.seEntrevisto = true;
//     return koderAEntrevistar;
// };

// const pagar = (koderAPagar) => {
//     koderAPagar.sePago = true;
//     return koderAPagar;
// };

// const inscribir = (koderAInscribir) => {
//     koderAInscribir.seInscribio = true;
//     return koderAInscribir;
// };

// const koderInformado = darInformes({...koder});
// const koderEntrevistado = entrevistar({...koderInformado});
// const koderPagado = pagar({...koderEntrevistado});
// const koderInscrito = inscribir({...koderPagado});
// console.log("koderInscrito", koderInscrito)


/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerReceta = (recetaALeer, callback) => {
    let error = null;
    setTimeout(() =>{
        recetaALeer.recetaLeida = true;

        if(!recetaALeer.recetaLeida) {
            error = "La receta no ha sido leida";
        };
        callback(error, recetaALeer);
    }, 1000);
};

const conseguirIngredientes = (ingredientes, callback) => {
    let error = null;
    setTimeout(() => {
        ingredientes.ingredientesConseguidos = true;

        if(!ingredientes.ingredientesConseguidos) {
            error = "No has conseguido los ingredientes";
        };
        callback(error, ingredientes);
    }, 1000);
};

const prepararMasa = (masa, callback) => {
    let error = null;
    setTimeout(() => {
        masa.masaPreparada = true;

        if(!masa.masaPreparada) {
            error = "No has preparado la masa";
        };
        callback(error, masa);
    }, 1000);
};

const hornearPastel = (pastel, callback) => {
    let error = null;
    setTimeout(() => {
        pastel.pastelHorneado = true;

        if(!pastel.pastelHorneado) {
            error = "No has horneado el pastel";
        };
        callback(error, pastel);
    }, 1000);
};

const decorarPastel = (pastelDecorado, callback) => {
    let error = null;
    setTimeout(() => {
        pastelDecorado.pastelDecorado = true;

        if(!pastelDecorado.pastelDecorado) {
            error = "No has decorado el pastel";
        };
        callback(error, pastelDecorado);
    }, 1000);
};

leerReceta({...pastel}, (error, recetaLeida) => {
    if(error) {
        console.log("error:", error);
        return;
    };
    conseguirIngredientes({...recetaLeida}, (error, ingredientesConseguidos) => {
        if(error) {
            console.log("error:", error);
            return;
        };
        prepararMasa({...ingredientesConseguidos}, (error, masaPreparada) => {
            if(error) {
                console.log("error:", error);
                return;
            };
            hornearPastel({...masaPreparada}, (error, pastelHorneado) => {
                if(error) {
                    console.log("error:", error);
                    return;
                };
                decorarPastel({...pastelHorneado}, (error, pastelDecorado) => {
                    if(error) {
                        console.log("error:", error);
                        return;
                    };
                    console.log("Felicidades!", pastelDecorado);
                });
            });
        });
    });
});

