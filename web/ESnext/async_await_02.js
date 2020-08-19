function gerarNumerosEntre(min,max, numerosProibidos){
    if(min>max){
        [max,min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)) reject('Numero repetido: ' + aleatorio)
        resolve(aleatorio)
    })
}

function gerarMegaSena(qtdNumeros){
    
}

gerarNumerosEntre(1,5, [1,2,4]).then(console.log).catch(console.log)