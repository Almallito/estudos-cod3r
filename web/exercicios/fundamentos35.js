function vetores(vetor1, vetor2) {
    let vetorFinal = vetor1
    for (let i = 0; i < vetor2.length; i++) {
        vetorFinal.push(vetor2[i])
    }
    return vetorFinal
}

const vetor1 = [1, 2, 3, 4, 5]
const vetor2 = [6, 7, 8, 9, 10]

console.log(vetores(vetor1, vetor2))