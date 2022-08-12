/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
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
    setTimeout(() => {
      recetaALeer.recetaLeida = true;

      if (!recetaALeer.recetaLeida) {
        reject("La receta no ha sido leida");
      }
      resolve(recetaALeer);
    }, 1000);
  });
};

const conseguirIngredientes = (ingredientes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ingredientes.ingredientesConseguidos = true;

      if (!ingredientes.ingredientesConseguidos) {
        reject("No has conseguido los ingredientes");
      }
      resolve(ingredientes);
    }, 1000);
  });
};

const prepararMasa = (masa) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      masa.masaPreparada = true;

      if (!masa.masaPreparada) {
        reject("No has preparado la masa");
      }
      resolve(masa);
    }, 1000);
  });
};

const hornearPastel = (pastel) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pastel.pastelHorneado = true;

      if (!pastel.pastelHorneado) {
        reject("No has horneado el pastel");
      }
      resolve(pastel);
    }, 1000);
  });
};

const decorarPastel = (pastelDecorado) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pastelDecorado.pastelDecorado = true;

      if (!pastelDecorado.pastelDecorado) {
        reject("No has decorado el pastel");
      }
      resolve(pastelDecorado);
    }, 1000);
  });
};

const pastelPreparado = leerReceta({ ...pastel });
pastelPreparado
  .then((recetaLeida) => {
    console.log(recetaLeida);

    conseguirIngredientes({ ...recetaLeida })
      .then((ingredientesConseguidos) => {
        console.log(ingredientesConseguidos);

        prepararMasa({ ...ingredientesConseguidos })
          .then((masaPreparada) => {
            console.log(masaPreparada);

            hornearPastel({ ...masaPreparada })
              .then((pastelHorneado) => {
                console.log(pastelHorneado);

                decorarPastel({ ...pastelHorneado })
                  .then((pastelDecorado) => {
                    console.log("Exito", pastelDecorado);
                  })
                  .catch((error) => {
                    console.log("error", error);
                  });
              })
              .catch((error) => {
                console.log("error", error);
              });
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  })
  .catch((error) => {
    console.log("error", error);
  });
