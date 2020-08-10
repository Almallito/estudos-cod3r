const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj));// apenas transforma em texto

// console.log(JSON.parse("{a:1, b:2, c:3"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b":2, "c":"string", "d":true, "e":[], "f":{}}'))

function retornaJSON(obj){
    return JSON.stringify(obj)
}

const obj2  = {
    nome: 'caneta',
    preco: 1.99,
    estoque: true,
    cores: {
        preta: true,
        vermelha: false,
        azul: true,
    }
}

console.log(retornaJSON(obj2))