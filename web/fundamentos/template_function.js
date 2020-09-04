let nome = 'Rebeca'
const template = `
    Olá 
    ${nome}!`

console.log(template)

const up = texto => texto.toUpperCase() // function arrow

console.log(`Ei... ${up('cuidado')} ${nome}`)

console.log(!!'')

const soma = (a, b) => a + b

console.log(soma(1, 2))