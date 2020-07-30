const jurosSimples = function (capital, tempo, juros) {
    return capital += (capital * juros) * tempo
}

console.log(jurosSimples(2000, 12, 0.04))

const jurosCompostos = function (capital, tempo, juros) {

    for (let i = 0; i < tempo; i++) {
        capital += capital * juros
    }

    return capital

}

console.log(jurosCompostos(2000, 12, 0.04))