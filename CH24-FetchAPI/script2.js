// Primer paso: Usar fetch a la ruta especificada
fetch('https://api.coingecko.com/api/v3/ping')
.then(respuesta => {
    return respuesta.json();
})
.then(info => {
    console.log('El valor del Cripto es: ', info);
})




fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(response => response.json())
.then(data => {console.log(data)
    console.log(data[0])
    console.log(data[0].name)
    console.log("Precio actual del bitcoin: " + data[0].current_price+" USD");
}
)


// Tarea imprimir de fecht. 

//
