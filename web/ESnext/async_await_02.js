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

async function gerarMegaSena(qtdNumeros, tentativas=1){
    const numeros = []
    try{
        for (let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60,numeros))
         }
         return numeros
    } catch (e){
        if (tentativas > 1000){
            throw 'Não conseguiu gerar'
        } else {
            // console.log('tentativas' + tentativas) 
            return gerarMegaSena(qtdNumeros,tentativas+1)
        }
    }
}

gerarMegaSena(50).then(console.log).catch(console.log)

// gerarNumerosEntre(1,5, [1,2,4]).then(console.log).catch(console.log)