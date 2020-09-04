function mediaVetor(vetor) {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }
    total = total / vetor.length
    return total
}

const vetor = [10, 25, 5, 10]

console.log(`Media vetor = ${mediaVetor(vetor)}`)