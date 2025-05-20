const { calculateExpression } = require("../utils/calculate.js");

test('calcular expressao "2 + 5"', () => {
    let soma = "5 + 2"
    expect(calculateExpression(soma).resultado).toBe(7);  // Verificando se o resultado é 7
});

test('calcular expressao "4 / 2"', () => {
    let soma = "4 / 2"
    expect(calculateExpression(soma).resultado).toBe(2);  // Verificando se o resultado é 7
});

test('calcular expressao "4 * 2"', () => {
    let soma = "4 * 2"
    expect(calculateExpression(soma).resultado).toBe(8);  // Verificando se o resultado é 7
});

test('calcular expressao "4 - 2"', () => {
    let soma = "4 - 2"
    expect(calculateExpression(soma).resultado).toBe(2);  // Verificando se o resultado é 7
});

test('calcular expressao inválida', () => {
    const resultado = calculateExpression("2 / 0");  // Expressão inválida (divisão por zero)
    expect(resultado.erro).toBe("Expressão inválida");  // Verificando se o erro é retornado
});
