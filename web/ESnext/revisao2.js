//function arrow
const soma = (a, b) => a+b
console.log(soma(1,3))

//function arrow (this)
const lexico1 = () => console.log(this === exports)

const obj = {
    nome: 'objeto',
    valor: 2
}
const lexico2 = lexico1.bind(obj) //ignorado
lexico1()
lexico2()

//parametro default
function log(texto = 'Teste'){
    console.log(texto)
}
log('Eae meu chapa')
log()

//operador rest
function total(...numeros){
    let total = 0
    // numeros.forEach(n => total += n)
    for(let i in numeros){
        total += numeros[i]
    }
    return total
}

console.log(total(1,2))