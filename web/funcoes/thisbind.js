const pessoa = {
    saudacao: 'Bom dia',
    falar: function () {
        console.log(this.saudacao)
    }
}

pessoa.falar() // this na funcao falar é pessoa

const falar = pessoa.falar
falar() // this na funcao falar e a variavel

const falar2 = pessoa.falar.bind(pessoa);

falar2() // com a funcao bind conseguimos apontar para qual contexto o this ira agir

console.log(pessoa.falar.bind(pessoa))