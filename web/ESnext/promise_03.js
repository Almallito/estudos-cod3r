function geraNumerosEntre(min,max){
    if(min>max){
        [max,min] = [min, max]
    }
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}

setInterval(()=>{
    geraNumerosEntre(10,30).then(num => num * 10).then(num => `O numero gerado foi: ${num}`).then(console.log)
}, 2000)