let pontuacao = '10 20 20 8 25 3 0 30 1'

function melhorPior(pontos) {
    let pontuacao2 = pontos.split(' ')
    let recorde = pontuacao2[0]
    let contRecorde = 1
    let piorPontuacao = pontuacao2[0]
    let jogo

    for (let i = 0; i < pontuacao2.length; i++) {
        if (pontuacao2[i] > recorde) {
            recorde = pontuacao2[i]
            contRecorde++
        } else if (pontuacao2[i] < piorPontuacao) {
            piorPontuacao = pontuacao2[i]
            jogo = i + 1
        }

    }
    return [contRecorde, jogo]
}

console.log(melhorPior(pontuacao))

