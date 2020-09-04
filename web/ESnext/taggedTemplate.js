function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'gulherme'
const situacao = 'reprovado'

console.log(tag `${aluno} esta ${situacao}`)