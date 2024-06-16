// Función para sumar los dos números ingresados
function sumar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}

// Función para restar el segundo número del primero
function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}

// Función para multiplicar los dos números ingresados
function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}

// Función para dividir el primer número entre el segundo
function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('resultado').innerText = 'No se puede dividir por cero';
    } else {
        let resultado = num1 / num2;
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    }
}
