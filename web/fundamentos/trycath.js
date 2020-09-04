function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Sucesso!')
    }

}

function tratarErro(erro) {
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

const obs = { name: 'Roberto' }
printName(obs)