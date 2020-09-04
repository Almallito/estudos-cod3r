function calcConvenio(idade) {
    let valorPadrao = 100;
    let valorAdicional

    if (idade <= 0) {
        return 'idade invalida'
    } else if (idade < 10) {
        valorAdicional = 80
        return valorPadrao + valorAdicional
    } else if (idade >= 10 && idade <= 30) {
        valorAdicional = 50
        return valorPadrao + valorAdicional
    } else if (idade >= 31 && idade <= 60) {
        valorAdicional = 95
        return valorPadrao + valorAdicional
    } else if (idade >= 61) {
        valorAdicional = 130
        return valorPadrao + valorAdicional
    }
}

console.log(calcConvenio(8))
console.log(calcConvenio(15))
console.log(calcConvenio(40))
console.log(calcConvenio(80))
console.log(calcConvenio(-10))