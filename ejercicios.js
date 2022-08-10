// Construir una funcion que separe los nombres largos de los cortos, un nombre largo es aquel que supera los 4 caracteres de longitud
// Imput: []
// Output: const [nombresCortos, nombresLargos] = funcion(nombres)

const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ];

  const breakNames = (nombres) => {
      const nombresCortos = [];
      const nombresLargos = [];
    nombres.forEach((nombre) => {
        if(nombre.length < 4) {
            nombresCortos.push(nombre);
        }else {
            nombresLargos.push(nombre);
        }
        
    })
    return [nombresCortos, nombresLargos];
    };
  const [nombresCortos, nombresLargos] = breakNames(nombres);
  console.log(nombresCortos);
  console.log(nombresLargos);


 /* Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
Input: ["Ale", "Mariana", "Adrian"]...
Output:
{
	0: {
		name: "Ale", -> string
		length: 3, -> numero
		isGreaterThanFour: true -> booleano
	}
}
*/

const transformarNombres = (nombres) => {
    nombres.reduce((resultado, nombre, index) => {
        resultado[index] = ({name: nombre, length: nombre.length, isGreaterThanFour: (nombre.length > 3? true : false)});
        console.log(resultado)
        return resultado;
    }, {});
};

transformarNombres(nombres);
