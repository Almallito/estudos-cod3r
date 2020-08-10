const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

const resultado2 = array => {
    let arrayfinal = []
    for (let i = 0; i < array.length; i++){
        arrayfinal.push(paraObjeto(array[i]))
    }
    return arrayfinal
}

// console.log(resultado2(carrinho))
console.log(resultado)
