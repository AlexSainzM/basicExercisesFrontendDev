/*
Dentro del DOM (Document Object Model o Modelado de Objetos del Documento) encontraremos unidades basicas llamadas NODOS. Pueden ser de los siguientes tipos:
    - Documento: Nodo raiz o nodo a partir del cual se derivan todos los demas. Este nodo permite acceder o entrar a todos los elementos del dom. 

    - Elemento: Definidos por las etiquetas dentro del html. (<div>, <h1>, <p>, <ul>, <li>, <tr>
    
    - Texto: Elemento del tipo texto que generalmente esta dentro de otro nodo del tipo elemento.

    - Atributos: Nodos del tipo atributo que nos dan mas informacion asociada a una etiqueta

    - Comentarios: Los comentarios y otros elementos como declaraciones del doctype en la cabecera se consideran nodos.

*/


/*
Metodos mas recientes para acceder a elementos de HTML

        - document.querySelector (primer elemento)
        - document.querySelectorAll (todos los elementos)
*/

/*
Crear y agregar elementos en el DOM

Crear nodos
        - document.createElement (nodo del tipo etiqueta)
        - document.createTextNode (nodo del tipo texto)
*/


let h1 = document.createElement("h1");
let div = document.createElement("div");
let texto = document.createTextNode("Hola, como están en generation");
let comentario = document.createComment("Esto es un comentario desde JS");

let lugarAInsertar = document.getElementById("contenedor");
//h1 = document.createElement("h1");
h1.appendChild(texto);
lugarAInsertar.append(h1);