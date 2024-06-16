// Manipulación del Dom 

//Vamos a identificar los elementos del HTML y asignarlos a variables 

const input = document.getElementById("inputPokemon"); //traigo el input
const button = document.getElementById("buscarPokemon"); // traigo el boton
const pokebola = document.getElementById("pokebola"); //Traigo el contenedor

//Creación de las funciones

// una funcion para traer la información del pokemon
function traerPokemon(pokemon) {    //funcion que trae a los pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //realizamos la petición a esta URL, agregamos la pantalla literal y esto nos ayudara a ir variando el elemento final de mi ruta (end-point)
    .then(infopokemon=> infopokemon.json()) //cuando la promesa se resuelva asignamos laa info a la veriable info pokemon en un formato json
    .then((data) => { //está promesa se resuelve con la informacion ya guardad previamente, y está información se pasdará como un parametro de una función adicional llamada crearPokemon
        crearPokemon(data);
        console.log(data)
    });
}


//Una funcion para usar la información del pokemon y ponerla en el html 
function crearPokemon(pokemon){ //este parametro es el que controla todo (infomación que se muestra)
    //Aquí usamos la minupulación del API DOM para crear y poner la info del pokemon en el HTML 

    //Crear elementos
    const img = document.createElement("img"); //creamos la etiqueta img
    img.src = pokemon.sprites.back_shiny; //usamos la imagen de mi pokiemon para usarla como el atributo scr de la etiqueta imagen 
    img.alt="Imagen bonita de un Pokemón";
    const h3 = document.createElement("h3"); //Creamos titulo para poner más info.
    h3.textContent = pokemon.name; // le ponemos el nombre del pokemon 

    const div = document.createElement("div"); //crear un elemento div
    div.appendChild(img); //insertamos la imagen como un hijo del div
    div.appendChild(h3); //insertamos el titulo como un hijo del div
    pokebola.appendChild(div); //agregamos el div al contenedor de la pokebola 

}

traerPokemon("charmander");