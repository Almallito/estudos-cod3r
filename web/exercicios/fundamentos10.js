const verifyInt = (num) => {
    if (Number.isInteger(num)) {
        if (num % 3 == 0) {
            return true
        } else {
            return false
        }
    } else {
        return 'Não é um numero inteiro'
    }
}
console.log(2016 % 400)
console.log(verifyInt(4.5))
console.log(verifyInt(4))
console.log(verifyInt(9))
