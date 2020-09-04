function maiormenor(vetor) {

    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (typeof maior === 'undefined' && typeof menor === 'undefined') {
            maior = vetor[i]
            menor = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    console.log(`Menor = ${menor}, Maior = ${maior}`)
}

const vetor = [8, 7, 1, 5, 8, 9, 5, 7, 5, 2, 11, 2]

maiormenor(vetor)   