console.log("-------------Aqui empieza el Script SINCRONISMO VS ASICRONISMO----------------");

/*
Sincronismo vs Asincronismo

 - Carnita asada (asincronico)
 - Torteria (sincronico)

 Conceptos de asincronismo o sincronismo

 Hilos o threads: pista de aterrizaje
 Input o entrada: avion llegando
 Output o salida: avion despega
 Manejador de eventos: torre de control
*/


//JavaScript sincrono

console.log("Inicio Sincronia"); //bienvenida

function dosSync (){
    console.log("Dos");
}

function unoSync(){
    console.log("Uno");
    dosSync();
    console.log("Tres")
}

unoSync();

console.log("Fin Sincronia"); //salida

/*
En este ejemplo, podemos ver que las operaciones se hacen de una vez, y se bloquea el flujo de operacion. El hilo es bloqueado mientras espera la respuesta, cuando esta se procesa, se para a la siguiente operacion y asi sucesivamente hasta terminar todas las operaciones.
*/

console.log("-------------Aqui  termina el Script SINCRONISMO VS ASICRONISMO----------------");

console.log("-------------------------------------------");










/*-------------------------------------*/

console.log(" --------Ejemplo de un callback como parametro de otra función -------------")

//Ejemplo de Callback (funcion como parametro de otra funcion)
function suma (a, b, callback){ //dos valores numericos, un callback
    const resultado = a + b; //suma
    callback(resultado); //asigno el resultado al callback para que al invocar se pase ese resultado como argumento
}

function mostrarResultado(resultado){
    console.log("El resultado es " + resultado);
}

suma (5, 10, mostrarResultado);

console.log("---------------------------------------------");

/*
Hay diversas formas de trabajar con el asincronismo en JS (brujeria avanzada)

    - Por medio de funciones (setTimeOut) forma basica
    - Por callbacks ()
    - Promesas
    - Async/Await
*/

//------------------------------------------------------------------
/* Ejemplo de un callback como parametro de otra funcion (ejemplo1)*/

//Otro ejemplo de callback (ejemplo1)
function obtenerDatos (callback){
    //setTimeOut para emular la conexion al servidor
    setTimeout(()=>{
        const datos  = { nombre: "Felipe", edad: "30"}; //datos de Felipe
        callback(datos);
    }, 2000);             //ATENCIÓN !!! Esta promesa se resuelve en 2 segundos.
}

function mostrarNombre(datos){ //usamos ese callback con los datos
    console.log("ejemplo 1: callback como parametro de otra funcion; nombre");
    console.log("Nombre: " + datos.nombre); //mostrar informacion
}

function mostrarEdad(datos){
    console.log("ejemplo 1: callback como parametro de otra funcion; edad");
    console.log("Edad: " + datos.edad);
}

obtenerDatos(mostrarNombre);
obtenerDatos(mostrarEdad);
//Podemos esperar que esta funcion se ejecute hasta el final en la consola debido al setTimeout





/*
Fetch API

Fetch es el nombre de una nueva API para JS con la cual podemos realizar peticiones HTTP asincronas utilizando promesas y de forma que el codigo sea un poco mas sencillo y legible. La forma de usar una peticion fetch es sencilla, solo tenemos que llamar a fetch y pasarle por parametro la URL de la peticion a realizar:

    Realizamos la peticion y guardamos la promesa en una variable
    const solicitud = fetch('https://jsonplaceholder.typicode.com/users')

    Si es resuelta, entonces ejecutamos esta funcion
    solicitud.then(function(respuesta) {....});
*/



/*
JSON (JavaScript Object Notation)

JSON es un objeto que esta escrito en formato JSON (un objeto que se ha convertido en una cadena de texto.). Se usan para la comunicacion entre cliente-servidor y nos permite intercambiar informacino estructura.

Para utilizan objetos JSON, usamos dos metodos principales

    - JSON.stringify(): Convertir un objeto JS en una cadena JSON
    - JSON.parse(): Convertir una cadena JSON en un objeto

*/

console.log("-----------JSON JS Object Notation --------------");

//Esto es un objeto de JS (nosotros hacer operaciones) cliente al servidor
const persona = {
    nombre: "Felipe",
    edad: "30",
    estado: "Estado de Mexico"
};

console.log(persona);
console.log(persona.edad);
console.log(persona.estado);

const personaJSON = JSON.stringify(persona); //convirtiendo mi objeto a cadena JSON

console.log(personaJSON);
console.log(typeof(personaJSON));

console.log("------------------------------------------------");





/*-----Diferencia entre cadena JSON y Objeto JSON -----*/
//Esto es una cadena JSON (donde no podemos hacer operaciones) servidor al cliente
console.log("----Diferencia entre cadenas y objetos JSON ---------------");
const objeto = '{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"}';

console.log(objeto.description); //Obtenemos undefined debido a que hasta este momento objeto es una cadena y no un objeto. 

const objetoJS = JSON.parse(objeto); //Lo convertimos en objeto
console.log(objetoJS);// Ya se puede mostrar en consola
console.log(objetoJS.description);
console.log("---------------------------------");



//Primer paso usar fetch a la ruta especificada
fetch('https://pokeapi.co/api/v2/pokemon/ditto')

//segundo paso: usar una promesa para resolver la conexion
.then(respuesta => {
    return respuesta.json();
})

//tercera promesa: 
.then(informacion =>{
    console.log("El nombre de nuestro pokemon es: ", informacion.name);
    console.log("El numero de mi pokemon es: ", informacion.id);
    console.log("La imagen de mi pokemon es: ", informacion.sprites.front_default);
})

console.log(informacion.name); //undefined porque la informacion vive dentro de la promesa, y es probable que se muestre en consola antes de que se resuelva la promesa

console.log("-------------Aqui termina el Script1----------------");
