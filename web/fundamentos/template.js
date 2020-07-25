let nome = 'Rebeca'
const template = `
    Olá 
    ${nome}!`

console.log(template)

const up = texto => texto.toUpperCase() // function arrow
console.log(`Ei... ${up('cuidado')} ${nome}`)

console.log(!!'')