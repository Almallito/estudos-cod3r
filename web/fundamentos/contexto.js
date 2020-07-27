let pessoa = {
    nome: 'Ana',
    falar: function () {
        console.log(`Eu sou ${this.nome}`)
    }
}

pessoa.falar