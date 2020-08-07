const produto = new Object();
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto'] // se for criado com conchetes, consegue ser apenas acessado com conchetes

console.log(produto)

const carro = { 
    modelo: 'clio',
    valor: 13500,
    proprietario: {
        nome: 'djalma',
        idade: 21,
        salario: 1300,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade:22,
    }, {
        nome: 'ana',
        idade:23,
    }],

    calcularValorSeguro: function(){ 
        return (((this.proprietario.salario *  this.proprietario.idade ) / this.valor) * 1045).toFixed(2);
    }
}

console.log(carro.calcularValorSeguro())
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)