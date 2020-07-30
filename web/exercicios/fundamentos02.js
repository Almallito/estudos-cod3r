const triangulo = (l1, l2, l3) => {
    if (isNaN(l1 || l2 || l3)) {
        return console.log('nao forma um triangulo')
    } else if (l1 == l2 && l1 == l3 && l2 == l3) {
        return console.log('triangulo equilatero')
    } else if (l1 == l2 || l2 == l3 || l3 == l1) {
        return console.log('triangulo isosceles')
    } else if (l1 != l2 && l2 != l3 && l1 != l3) {
        return console.log('triangulo escaleno')
    }
}

triangulo(9, 9, 9) //equilatero
triangulo(9, 9, 0) // isosceles
triangulo(1, 2, 3) // escaleno
triangulo('d', 'e', 'f')// nao forma triangulo