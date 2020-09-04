const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

const nome = 'maria'
const pessoa = {
    nome, 
    idade: 20,
    falar(){
        return console.log('meu pitchu pitchu')
    }
}
console.log(pessoa)
pessoa.falar()


 