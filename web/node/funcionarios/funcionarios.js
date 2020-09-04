const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const mulherChinesaRica = funcionarios.filter(a => a.pais == 'China').filter(b => b.genero == 'F').reduce( (func, funcAtual) => func.salario > funcAtual.salario ? func : funcAtual)
    console.log(mulherChinesaRica)

})

