
function geraNumerosEntre(min,max, tempo){
    if(min>max){
        [max,min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(()=>{
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        geraNumerosEntre(1,60,800), 
        geraNumerosEntre(1,60,500), 
        geraNumerosEntre(1,60,1000), 
        geraNumerosEntre(1,60,2000), 
        geraNumerosEntre(1,60,200), 
        geraNumerosEntre(1,60,1500), 
    ])
}
console.time('promise')
gerarVariosNumeros().then(numeros => console.log(numeros)).then(() => console.timeEnd('promise'))
