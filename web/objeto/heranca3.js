const pai = {nome: 'Pedro', corCabelo:'preto'}
const filha = Object.create(pai)
filha.nome = 'Ana'

console.log(filha)
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {nome: {value: 'Bia', writable: false, enumerable: true}})

console.log(filha2.nome)

filha2.nome = 'Carla' // ignorado

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log("Por herança: " + key)
}
