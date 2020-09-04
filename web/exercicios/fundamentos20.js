

function calcCedulas(valor) {

    let calc = 0
    let quant100 = 0
    let quant50 = 0
    let quant20 = 0
    let quant10 = 0
    let quant5 = 0
    let quant2 = 0
    let quant1 = 0
    let resul = ''
    let cedula = 0

    while (calc < valor) {

        cedula = buscaCedula(calc, valor)

        if (calc < valor) {
            switch (cedula) {
                case 100:
                    quant100++
                    break

                case 50:
                    quant50++
                    break
                case 20:
                    quant20++
                    break

                case 10:
                    quant10++
                    break

                case 5:
                    quant5++
                    break
                case 2:
                    quant2++
                    break

                case 1:
                    quant1++
                    break

            }
            calc += cedula
            console.log('montante = ' + calc)
        }
    }
    if (valor == calc) {
        resul = resultado(quant100, quant50, quant20, quant10, quant5, quant2, quant1, valor)
    } else {
        resul = 'Não é possivel sacar o dinheiro'
    }
    return resul
}

const buscaCedula = (total, valor) => {
    const cedulas = [100, 50, 10, 5, 1] //trabalhando com array  é possivel adicionar e remover notas o quanto quiser
    let teste
    let diferenca = valor - total
    let tamanhoArray = cedulas.length - 1
    for (let i = 0; i < cedulas.length; i++) {
        teste = cedulas[i] + cedulas[i + 1]
        if (total + cedulas[i] <= valor && total + teste <= valor) {
            console.log('cedula usada = ' + cedulas[i])
            return cedulas[i]
        }
        if (diferenca < 10) {
            if (total + cedulas[tamanhoArray] <= valor) {
                console.log('cedula usada = ' + cedulas[tamanhoArray])
                return cedulas[tamanhoArray]
            }
        }
        // console.log("total-valor" + valor - total)
    }
    // return 0
}

function resultado(cont100, cont50, cont20, cont10, cont5, cont2, cont1, saque) {
    let resulfinal = ''
    if (cont100 > 0) {
        resulfinal += `${cont100} nota(s) de R$100, `
    }
    if (cont50 > 0) {
        resulfinal += `${cont50} nota(s) de R$50, `
    }
    if (cont20 > 0) {
        resulfinal += `${cont20} nota(s) de R$20, `
    }
    if (cont10 > 0) {
        resulfinal += `${cont10} nota(s) de R$10, `
    }
    if (cont5 > 0) {
        resulfinal += `${cont5} nota(s) de R$5, `
    }
    if (cont2 > 0) {
        resulfinal += `${cont2} nota(s) de R$2, `
    }
    if (cont1 > 0) {
        resulfinal += `${cont1} nota(s) de R$1, `
    }
    resulfinal += `Saque de R$ ${saque}`
    return resulfinal
}

console.log(calcCedulas(86))