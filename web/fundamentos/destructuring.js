const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1234
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bem_humorada = true } = pessoa; // define valor padrao '='
console.log(sobrenome, bem_humorada)

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    console.log((max - min) + min)
    return Math.floor(valor);
}

console.log(rand({ min: 500, max: 1000 }))