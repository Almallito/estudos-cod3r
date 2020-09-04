function negativos(vetor) {
    let cont = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            cont++
        }
    }
    return cont
}

const vetor = [1, 7, 8, 6, -1, 5, -6, 10, 15, -20]
const vetor2 = [-1, -2, -3, 0, -4, 5]

console.log(`Este vetor tem ${negativos(vetor)} negativos`)
console.log(`Este vetor tem ${negativos(vetor2)} negativos`)