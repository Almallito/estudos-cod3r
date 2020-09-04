function caixaAlmoço(prato, quantidade) {
    let total = 1;
    if (typeof quantidade == 'undefined') {
        quantidade = 1
    }
    switch (prato) {
        case 100:
            return console.log(`Cachorro quente, total do pedido: R$${(total * quantidade) * 3}`)
        case 200:
            return console.log(`Hamburguer simples, total do pedido: R$${(total * quantidade) * 4}`)
        case 300:
            return console.log(`Cheeseburguer, total do pedido: R$${(total * quantidade) * 5.5}`)
        case 400:
            return console.log(`Bauru, total do pedido: R$${(total * quantidade) * 7.5}`)
        case 500:
            return console.log(`Refrigerante, total do pedido: R$${(total * quantidade) * 3.5}`)
        case 600:
            return console.log(`Suco, total do pedido: R$${(total * quantidade) * 2.8}`)
        default:
            return console.log('Produto não cadastrado')
    }
}

caixaAlmoço(100, 10)
caixaAlmoço(200)
caixaAlmoço(300)
caixaAlmoço(400, 6)
caixaAlmoço(500)
caixaAlmoço(600, 2)
caixaAlmoço(700)
