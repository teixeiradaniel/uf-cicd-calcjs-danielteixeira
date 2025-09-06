const { add, subtract, multiply, divide, power } = require('./calculadora');

describe('Funções Matemáticas Básicas', () => {
  
  // Teste da função de adição
  test('Deve adicionar dois números corretamente', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });

  // Teste da função de subtração
  test('Deve subtrair dois números corretamente', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 20)).toBe(-10);
  });

  // Teste da função de multiplicação
  test('Deve multiplicar dois números corretamente', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-3, 4)).toBe(-12);
  });

  // Teste da função de divisão
  test('Deve dividir dois números corretamente', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  // Teste de divisão por zero
  test('Deve lançar erro ao tentar dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero não é permitida.");
  });

  // Teste da função de potenciação
  test('Deve calcular a potenciação corretamente', () => {
    expect(power(2, 3)).toBe(8);  // 2^3 = 8
    expect(power(5, 2)).toBe(25); // 5^2 = 25
    expect(power(3, 0)).toBe(1);  // 3^0 = 1
    expect(power(7, -1)).toBeCloseTo(0.142857, 6); // 7^-1 = 1/7 = 0.142857...
  });
});