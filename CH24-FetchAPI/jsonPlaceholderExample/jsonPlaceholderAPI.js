fetch ('https://jsonplaceholder.typicode.com/posts')
.then(respuesta => respuesta.json()) //prometeme que te conectas al server
.then(datos => console.log(datos))//promete que cuando te conectes, creas una variable llamda datos con la info de ese servidor
.then (error => console.log(error.mensaje))
;//si no te puedes conectar, avisame