

const arredondamento = (nota) => {
    let multiplo = []

    if (nota >= 38) {
        for (let i = 5; i <= 100; i += 5) {
            multiplo.push(i);
        }
        for (let i = 0; i < multiplo.length; i++) {
            if (nota + 3 <= multiplo[i + 1]) {
                return console.log(multiplo[i])
            }
        }
        console.log(multiplo)
    } else {
        return console.log('Aluno reprovado')
    }
}
arredondamento(43)