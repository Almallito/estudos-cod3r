const soma = function (x, y) {
    return x + y
}

const printResul2 = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

printResul2(2, 2)
printResul2(4, 1, function (x, y) {
    return x - y
})
printResul2(3, 3, (x, y) => x * y)