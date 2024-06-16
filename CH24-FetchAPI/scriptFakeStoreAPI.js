// Se muentra en consola la información de 4 productos

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/2')
            .then(res=>res.json())
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/3')
            .then(res=>res.json())
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/4')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Este fin dejaré está tarea lista, No he podido lograr regresar solo el title de un producto :( 
// Tambien agregaré manipulación del DOM
