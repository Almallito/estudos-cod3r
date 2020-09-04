const diaUtil = (dia) => {
    switch (dia) {
        case 1: case 7:
            console.log('Final de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia util')
            break
        default:
            console.log('Dia Invalido')


    }
}

diaUtil(7)
diaUtil(1)
diaUtil(8)
diaUtil(3)