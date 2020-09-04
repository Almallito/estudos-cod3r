const notas = [6.7, 7.4, 9.8, 8.1, 7.1]

for (let i in notas) {
    console.log('nota = ' + notas[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

externo: for (let a in nums) { // usando break com rotulos
    for (b in nums) {
        if (nums[a] == 2 && nums[b] == 2) {
            break externo
        }
        console.log(`Par = ${nums[a]}, ${nums[b]}`)
    }
}