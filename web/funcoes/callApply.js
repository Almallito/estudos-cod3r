function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// console.log(produto.getPreco())

const carro = { preco: 19900, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.20, '$')) // passando parametros para getpreco
console.log(getPreco.apply(carro, [0.20, '$'])) // passando parametros para getapply