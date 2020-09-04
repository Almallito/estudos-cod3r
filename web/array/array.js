let aprovados = new Array('Bia', 'Carlos', 'Ana')
function printArray(array){
     for (let i in array) {
        console.log(array[i])
    }
}
aprovados.sort()
printArray(aprovados)

delete aprovados[2]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1,1)
console.log(aprovados)



