function criarPessoa(name, year, sex) {
    return {
        nome: name,
        idade: year,
        sexo: sex
    }
}

const pessoa1 = criarPessoa('João', '20', 'M')
const pessoa2 = criarPessoa('Maria', '20', 'F')
const pessoa3 = criarPessoa('Ivone', '60', 'F')
const pessoa4 = criarPessoa('Luana', '28', 'F')
const pessoa5 = criarPessoa('Gabriel', '19', 'M')
const pessoa6 = criarPessoa('Matheus', '17', 'M')

let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6]

function print(name, sex, year) {
    let newsex
    if (sex == 'M') {
        newsex = 'Masculino'
    } else if (sex == 'F') {
        newsex = 'Feminino'
    }
    console.log(
        `
         Nome: ${name},
         Sexo: ${newsex},
         Idade: ${year} anos,
        `
    )
}

for (let i in pessoas) {
    print(pessoas[i].nome, pessoas[i].sexo, pessoas[i].idade)
}