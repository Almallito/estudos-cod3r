function fun1() { } // forma literal

const fun2 = function (a, b) { return a + b } //forma variavel

const array = [function () { }, fun1, fun2] // armazenando em array

console.log(array[2](2, 3)) // chamando a função armazena no array

const obj = {
    falar: function () { console.log('Eae meu chapa') } // armazenando uma funcao em um atributo 
}

obj.falar() // evocando funcao dentro do objeto