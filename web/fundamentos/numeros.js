const peso = 1.0
const peso2 = Number('2.1')

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso + avaliacao2 * peso2

const media = total / (peso + peso2)

console.log('peso1: ' + peso + '\n' + Number.isInteger(peso) + '\n \n' + 'peso2: ' + peso2 + '\n' + Number.isInteger(peso2) + '\n \n')
console.log(typeof peso + '\n' + typeof peso2 + '\n \n')
console.log(media.toFixed(1))
console.log(media.toString(2)) // transforma em binario
console.log(typeof media)

