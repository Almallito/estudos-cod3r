class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamento){
        lancamento.forEach(i => this.lancamentos.push(i))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(i => {
            valorConsolidado += i.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 1300)
const parcelaCarro = new Lancamento('Carro', -210)
const celular = new Lancamento('Celular', -245)
const cartao1 = new Lancamento('Nubank', -300)
const cartao2 = new Lancamento('Renner', -170)

const contas = new CicloFinanceiro(6,2021)
contas.addLancamentos(salario,parcelaCarro,celular,cartao2,cartao1)

console.log(contas.sumario())