/**Hacer el proceso del pastel con Async/Await
 * 
 */

 const pastel = {
    recetaLeida: false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false,
  };
  
  const leerReceta = (recetaALeer) => {
    return new Promise((resolve, reject) => {
        recetaALeer.recetaLeida = true;
  
        if (!recetaALeer.recetaLeida) {
          reject("La receta no ha sido leida");
        }
        resolve(recetaALeer);
    });
  };
  
  const conseguirIngredientes = (ingredientes) => {
    return new Promise((resolve, reject) => {
        ingredientes.ingredientesConseguidos = true;
  
        if (!ingredientes.ingredientesConseguidos) {
          reject("No has conseguido los ingredientes");
        }
        resolve(ingredientes);
    });
  };
  
  const prepararMasa = (masa) => {
    return new Promise((resolve, reject) => {
        masa.masaPreparada = true;
  
        if (!masa.masaPreparada) {
          reject("No has preparado la masa");
        }
        resolve(masa);
    });
  };
  
  const hornearPastel = (pastel) => {
    return new Promise((resolve, reject) => {
        pastel.pastelHorneado = true;
  
        if (!pastel.pastelHorneado) {
          reject("No has horneado el pastel");
        }
        resolve(pastel);
    });
  };
  
  const decorarPastel = (pastelDecorado) => {
    return new Promise((resolve, reject) => {
        pastelDecorado.pastelDecorado = true;
  
        if (!pastelDecorado.pastelDecorado) {
          reject("No has decorado el pastel");
        }
        resolve(pastelDecorado);
    });
  };

  const pastelPreparado = async () => {
    try {
        const leerRecetaAsync = await leerReceta({...pastel});
        const conseguirIngredientesAsync = await conseguirIngredientes({...leerRecetaAsync});
        const prepararMasaAsync = await prepararMasa({...conseguirIngredientesAsync});
        const hornearPastelAsync = await hornearPastel({...prepararMasaAsync});
        const decorarPastelAsync = await decorarPastel({...hornearPastelAsync});
        console.log("El pastel está listo", decorarPastelAsync);

        return decorarPastelAsync;
    }
    catch (error) {
        console.log("Fallo:", error);
    }
  };

  pastelPreparado()
  .then((decorarPastelAsync) => {
    console.log ("Pastel decorado y listo fuera de la funcion", decorarPastelAsync);
  })
  .catch((err) => {
    console.log("Paso un error", err);

  });
