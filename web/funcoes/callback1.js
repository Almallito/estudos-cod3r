const fabricantes = ['Renault', 'Ford', 'BMW']

function print(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)