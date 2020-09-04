const calculaDelta = (a, b, c) => b ** 2 - 4 * a * c

const bhaskara = (a, b, c) => {
    let delta = calculaDelta(a, b, c)
    if (delta < 0) {
        return "Delta é negativo"
    }
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a
    return [x1, x2]
}

console.log(bhaskara(3, -15, 12))