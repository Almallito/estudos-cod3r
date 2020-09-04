//escolpo
{
    var a = 1
    let b = 1
}

console.log(a)

//template
const produto = 'ipad'
console.log(`${produto} é caro`)

//destructuring
const [l,e, ...tras] = 'Cod3r'
console.log(l,e,tras)

const [x,y] = [1,2,3]
console.log(x,y)

const obj = {
    nome: 'Lapis',
    preco: 2.99
}
const {nome: modelo, preco:valor} = obj
console.log(modelo,valor)


