function novo(f, ...parametros){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, parametros)
    return obj
}

function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula0 = new Aula('JS', 123)
const aula1 = novo(Aula, 'JS', 123)

console.log(aula0)
console.log(aula1)