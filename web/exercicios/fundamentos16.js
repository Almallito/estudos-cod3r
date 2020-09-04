const calculadora = (num1, operacao, num2) => {
    switch (operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

console.log(`
${calculadora(9, '/', 3)} 
${calculadora(3, '+', 3)}
${calculadora(4, '-', 2)} 
${calculadora(8, '*', 2)}
`)