function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const clio = new Carro(165, 1)
const bmw = new Carro(350, 20)

setInterval(function () {
    clio.acelerar()
    console.log(clio.getVelocidadeAtual())
    // bmw.acelerar()
    // console.log(bmw.getVelocidadeAtual())
}, 140)
