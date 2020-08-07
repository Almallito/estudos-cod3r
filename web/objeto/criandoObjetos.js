const obj1 = {}
const obj2 = new Object

console.log(obj1, obj2)

function Produto( preco, desc,nome){
    this.nome = nome
    this.getPrecoComDesconto = () => preco * (1-desc)
}

const Prod = new Produto( 10, 0.05,'Caneta')
const Prod2 = new Produto( 2000, 0.10,'Notebook')

console.log(Prod.getPrecoComDesconto())
console.log(Prod2.getPrecoComDesconto())

function calcSalario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase / 30) * (30- faltas)).toFixed(2)
        }

    }
}

const f1 = calcSalario('joao', 1480, 5)
const f2 = calcSalario('matheus', 1390, 1)
const f3 = calcSalario('maria', 1141, 0)

console.log(`${f1.getSalario()} = ${f1.nome}
${f2.getSalario()} = ${f2.nome}
${f3.getSalario()} = ${f3.nome}
`)