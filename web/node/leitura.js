const fs = require('fs')
const jsonArquivo = require('./arquivo.json')

const caminho = __dirname + '/arquivo.json'

//sincrona
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

fs.readFile(caminho, 'utf8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

console.log(jsonArquivo)