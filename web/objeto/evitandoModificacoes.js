const produto = Object.preventExtensions({ // nao deixa adicionar novas keys, mas excluir sim
    nome: 'Caneta',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa) // nao deixa add nem remover atributos
console.log('Selado:', Object.isSealed(pessoa)) 

const carro = {
    modelo: 'clio',
    marca: 'renault'
}

Object.freeze(carro) // nao deixa modificar o objeto carro
console.log('Freeze:', Object.isFrozen(carro))