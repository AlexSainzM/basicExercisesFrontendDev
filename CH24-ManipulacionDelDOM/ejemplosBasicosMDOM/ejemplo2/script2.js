//Programa para insertar tarjetas de bootstrap a mi HTML

//Recuperar los nodos del HTML

let nombre = document.getElementById("nombre").value; // Para traer el Valor
let edad = document.getElementById("edad").value; // Para traer el Valor
let descripcion = document.getElementById("descripcion").value; // Para traer el Valor
let email = document.getElementById("email").value; // Para traer el Valor

//obtenemos el boton

let boton = document.getElementById("boton");



//obtenemos el lugar 

let lugar =document.getElementById("contenido");

let tarjeta =
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <h6 class="card-subtitle mb-2 text-muted">${nombre}</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;

//

boton.addEventListener("click",agregarTarjeta);

//funcion
function agregarTarjeta(){
    lugar.innerHTML += tarjeta ;
}

/* 
//Funcion
function agregarTarjeta(){

    let valorNombre = nombre.value;
    let valorEdad = edad.value;
    let valorDescripcion = descripcion.value;
    let valorEmail = email.value;


    let tarjeta = 

`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${valorNombre}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${valorEdad}</h6>
  <p class="card-text">${valorDescripcion}</p>
  <a href="#" class="card-link">${valorEmail}</a>
  <a href="#" class="card-link">${valorEmail}</a>
</div>
</div>`;


    lugar.innerHTML += tarjeta;
}
 */