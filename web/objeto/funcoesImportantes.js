const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 10,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
// Object.setPrototypeOf(ferrari, carro)

console.log(pessoa)
pessoa.dataNascimento = '00/06/2020'
console.log(pessoa)

 const dest = {a:1}
 const o2 = {b:2}
 const o3 = {c:3, a:4}
 const obj = Object.assign(dest, o2,o3)
 console.log(obj)