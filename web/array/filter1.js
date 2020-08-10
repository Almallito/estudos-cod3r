const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

// const fragil = produtos.filter(p => p.fragil == true)
const precoAsc = produtos.filter(p => p.preco > 500 && p.fragil == true)
// const precoDesc = produtos.filter(p => p.preco < 2000)

// console.log(fragil)
console.log(precoAsc)
// console.log(precoDesc)
