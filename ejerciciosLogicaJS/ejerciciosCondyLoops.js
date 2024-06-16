/* Crear una función que verifique si un número es par o no.
Parametros [Recibe el numero a verificar, devuelve en un String si es par o no]
 */
console.log("-----Ejercicio funcion es par -------");

const funcEsPar = b => {
    if ( b % 2 == 0) {
        console.log(`El número ${b} es par`);
    } else {
        console.log(`El número ${b} no es par`);
    }
}

funcEsPar(3);

console.log("--------------------------------------");

/* Mismo ejercicio que el anterior, pero usando return  */

console.log("-----Ejercicio funcion es par (usando return)-------");

const funcEsPar2 = x => {
    let y ="";
    if ( x % 2 == 0) {
        y = `El número ${x} es par`;
    } else {
        y = `El número ${x} no es par`;
    }
    return y;
}

console.log(funcEsPar2(3));

console.log("--------------------------------------");

/* Crear un programa para verificar la edad de un usuario, debe ser mayor a 18 para un resultado positivo */

console.log("-----Ejercicio Edad de Usuario-------");

const edadUsuario = (a) => {
    let zy = "";
    if (a > 18) {
        zy = `Usuario mayor de edad: ${a} (permitido)`;
    } else {
        zy = `Usuario menor de edad: ${a} (prohibido)`;
    }
    return zy; 
}

console.log(edadUsuario(15));

console.log("--------------------------------------");


/* Reto 03 - Hora y calendario, revisar instrucciones. */

console.log("------Reto 3 Hora y Calendario---------");

/* Este ejercicio no está completo, pero sigo trabajando en el */

let dia = 12; //new Date().getDate().toLocaleString();
let mes = 12; //new Date().getMonth().toLocaleString();

let feriadodia = [12,24,31];
let feriadomes = [12,12,12];


const esLaboral = (diaHabil) => {
    diaHabil = 0;//new Date().getDay().toLocaleString();
    if (diaHabil == 0 || diaHabil == 6){
        return false;
    } else {
        for (var i = 0; i < (feriadodia.length); i++ ) {
            if (feriadodia == dia && feriadomes == mes) {
                return false;
            } else {
                return true;
            }
        }
    }
}

console.log(esLaboral());

console.log("--------------------------------------");

/* Escribir una funcion que regrese la cantidad de valores true que hay en un array */

console.log("-----Cantidad de valores true en un array -------");

const arrConTrues = [true, true, true];
let valoresTrue = 0;

const contarValTrue = (x) => {
    for (let i = 0; i < ((arrConTrues.length)); i++) {
        if (arrConTrues[0] === true) {
            valoresTrue += 1;
        }
    }
    return valoresTrue;
}

console.log(contarValTrue(arrConTrues));

console.log("-----------------------------");

/* Ejercicio 05: Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
Usar recursion */

console.log("-----Ejercicio máximo común divisor de dos números-------");

let maxDiv1 = 0;

const funcMaxDiv = (x) => {
    for (let i = 1; i < x; i++) {
        if ( x % i == 0) {
            maxDiv1 = i;
        }
    }    
    return maxDiv1;
}
    
console.log(funcMaxDiv(15));

console.log("-----------------------------");

/* Encontrar los primeros n elementos de la serie fibbonnacci */

console.log("------Ejercicio Serie Fibonacci---------");

const funcFibonacci = (y) => {
    let arraySerie = [1,1];
    let nuevoElemento = 0;
    for (let i = 1; i < (y - 1); i++){
        nuevoElemento =  arraySerie[i] + arraySerie[i-1];
        arraySerie.push(nuevoElemento);
        console.log(nuevoElemento);
    }
    return arraySerie;
}

console.log(funcFibonacci(3));

console.log("-----------------------------");

/* Encontrar el número n de una figura pidamidal tringula  */


/* Crea una función que tome el nombre de un país y su área (nombre, a), debe regresar la proporcion del area del país acorde al area total global disponible */ 

/* Escribir una función que retorne 0 si 1 y viceversa. Sin utilizar condicionales, ternarios, negacionesni operadores bit  */

console.log("------Ejercicio Usuarios en Línea  (Messenger)------");

/* // Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea" */



/* Ejercicio Oracle, Substring binarios */

console.log("-----SubStrings binarios-------");

function getSubstringCount(s) {
    s = "0100110011";
    let arr = s.split('');
    let current = 1;
    let previous = 0;
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        if (s[i] === s[i-1]) current++;
        else ans += Math.min(current, previous), previous = current, current = 1;
        

    }
    console.log(ans + Math.min(current, previous));
}

getSubstringCount();

console.log("-------------------------------------------");

/* 
Ejercicio Oracle, elimina los caracteres duplicados en un array, y debe devolverlos en orden descendente */

console.log("-----Ejercicio carácteres duplicados-------");

function getString() {
    inputString = "abacaba";
    let newArr = inputString.split('');
    console.log(newArr);
    const filtered = []
    for(var i = 0; i < newArr.length; i++) {
 
        const elemento = newArr[i];
       
        if (!filtered.includes(newArr[i])) {
          filtered.push(elemento);
        }
    console.log(filtered);
    }
}
getString();



/* Mostrar la tabla del 5 */

console.log("-------- Mostrar la tabla del 5----------");

const funcTablaMulti = (x) => {
    for (let i = 0; i < 10; i++){
        console.log(`${x} x ${i} = ${x*i}`);
    }
}

funcTablaMulti(5);

console.log("------------------------------------------------------");

/* Preguntar por este ciclo for */

/* for (var i = 10; i > 5; i--) {
    console.log(i);
    } 
*/

/* Ejercicios, (expected output de a)  */

/* 
let a = 315;
let  b = 840;
while (b>0){
    a %= b;
    swap (a,b);
}
console.log(a);
 */