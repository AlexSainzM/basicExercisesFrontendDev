const { substract, multiply, division, power } = require('./calculator');


const calculator = require('./calculator');

test('Suma de 2 numeros', () => {
    expect(calculator.sum(4, 6)).toBe(10);
});

test('Resta de 2 numeros', () => {
    expect(substract(4, 6)).toBe(-2);
});

test('Multiplicación de 2 numeros', () => {
    expect(multiply(4, 6)).toBe(24);
});

test('División de 2 numeros', () => {
    expect(division(4, 6)).toBe(.6);
});

test('Potencia de 2 numeros', () => {
    expect(power(4, 6)).toBe(4096);
});