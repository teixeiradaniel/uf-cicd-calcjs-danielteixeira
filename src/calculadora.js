// Função de adição
function add(a, b) {
    return a + b;
}   

// Função de subtração
function subtract(a, b) {
    return a - b;
}

// Função de multiplicação
function multiply(a, b) {
    return a * b;
}

// Função de potenciação
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Exportar as funções
module.exports = {
    add,
    subtract,
    multiply,
    power
};
