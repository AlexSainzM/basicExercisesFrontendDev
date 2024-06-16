// const arr = [1,2,3,4,5];
// const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

console.log(" ------ Número mas grande y el más pequeño -----------");

const arrNumero = [1, -563, 999, 0 , -1, -999];

function numeros () {
    const newArrNumero = [(Math.max(...arrNumero)), (Math.min(...arrNumero))];
    console.log(newArrNumero);
}

numeros();

console.log("-------------------------------------------");

console.log(" ------ Número mas grande y el más pequeño (ejemplo2) -----------");

//Esta funcion tambien toma a la constante arrNumero del ejemplo anterios como parametro. 


const numeros2 = (x) => {
    const newArrNumero = [(Math.max(x)), (Math.min(x))];
    console.log(newArrNumero);
}

numeros(...arrNumero);

console.log("-------------------------------------------");


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];

console.log(" ------ Ejercicio número dividido en mitades -----------");

const numDiv = (x) => {
    x = x / 2;
    const arrayDiv = [x , x];
    console.log(arrayDiv);
}
numDiv(10);

console.log("-------------------------------------------");

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1

console.log(" ------ Suma de resistores en serie -----------");

const resistances = [1, 5, 6, 3];
let sumaRes = 0;

function sumResistance() {
    
    for (let i = 0; i < (resistances.length); i++) {
        sumaRes = sumaRes + (resistances[i]);
        //console.log(resistances[i]);
    }
    console.log(sumaRes);
}

sumResistance(...resistances);

("-------------------------------------------");


/* Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante. */

/* 

["Felipe", "Fer", "Zabdiel"]

['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']

['Harry', 'Ron', 'Hermione'] 

*/


console.log(" -------- Ejercicio Sociedad Secreta ---------------");

//Este ejercicio esta pendiente de probar con .map

const names = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const newNameArr = [];

names.forEach((elemento) => {
    newNameArr.push(elemento.toString().slice(0,1));

});

console.log(newNameArr.toString().toUpperCase().replace(/,/g, ""));



console.log("---------------------------------------");


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


console.log(" -------- Funcion Multiplos ---------------");

//Función pendiente de ser reparada.

/* 
const funcMultiplos = (x, y) => {
    let newArrMultiplos = [];
    let contadorMultiplos = 0;
    let contadorStop = 10000000;
    for (let i = 0; contadorStop > 0 ; i++) {

        if (i%x == 0) {
            
            newArrMultiplos.push(i);
            contadorMultiplos =+ 1;
            if (contadorMultiplos == y) {
                contadorStop = 0;
            }
            //newNameArr.push(elemento.toString().slice(0,1)); 
            //console.log(newArrMultiplos);
            
        }
    }
    console.log(newArrMultiplos);
}
 */

function funcMultiplos (x, y) {
    let semaforo = 0;
    let i = 0;
    let newArrMultiplos = [];
    do {
        if (i%x == 0) {
            newArrMultiplos.push(i);
            i = i + 1 ;
            if (i == y){
                semaforo = 1;
            }
        }
    } 
    while (semaforo =! 0);
    console.log(newArrMultiplos);
}

funcMultiplos(2,10);

console.log(" -------------------------------------------");

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

console.log("---------Dominante positivo  (true/false)-----------");


//Dado el array, devuelve true si es dominante positivo y false si es dominante negativo.
const arrDom = [-1, -3, -5, 4, 6767];

function posOrNegDom () {
    let posDom = 0;
    let negDom = 0;
    let posOrNeg;
    arrDom.forEach((elemento) => {
               
        if (elemento > 0){
            posDom =+ 1;
        } else { negDom =+ 1; }
    });
    if (posDom > negDom) {
        posOrNeg = true;
    } else { posOrNeg = false }
    return posOrNeg;
}

console.log(posOrNegDom());

console.log(" -------------------------------------------");

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]







