

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
        // console.log(cedula)
        // console.log(calc)
        // console.log(valor)
        // console.log('esta no for ' + i)
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
            // console.log(`calc = ${calc}, quant100 = ${quant100}, quant50 = ${quant50}, quant10 = ${quant10}, quant5 = ${quant5}, quant1 = ${quant1}`)

        }

        if (valor == calc) {
            resul = resultado(quant100, quant50, quant20, quant10, quant5, quant2, quant1, valor)
            console.log(resul)
        }
    }
    return resul
}

const buscaCedula = (total, valor) => {
    const cedulas = [100, 50, 20, 10, 5, 2, 1] //trabalhando com array  é possivel adicionar e remover notas o quanto quiser
    for (let i = 0; i < cedulas.length; i++) {
        if (total + cedulas[i] <= valor) {
            console.log(cedulas[i])
            return cedulas[i]
        }
    }
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

calcCedulas(87)