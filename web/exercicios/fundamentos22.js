function calcAnuidade(valor, mes) {
    let montante
    let atraso = mes - 1
    if (mes > 0 && mes < 13) {
        montante = (valor * ((1 + 0.05) ** atraso)).toFixed(2)
        return montante
    } else {
        return 'Mes invalido'
    }

}

console.log(calcAnuidade(100, 4))
