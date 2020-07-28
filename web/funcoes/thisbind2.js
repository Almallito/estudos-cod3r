function Pessoa() { // necessita do bind para dar contexto
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

function Pessoa2() { // nao necessita do bind usando function arrow
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa2