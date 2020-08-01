function calcCrescimento(alt1, alt2, taxa1, taxa2) {
    if (taxa1 == taxa2 && alt1 == alt2) {
        return 'O crescimento das crianças sao equivalentes'
    } else {
        let tempo = 1
        let crescimento = 0
        let altura1 = alt1 / 100
        let altura2 = alt2 / 100

        if (taxa1 > taxa2 && alt1 < alt2 || alt1 == alt2 && taxa1 > taxa2) {
            while (altura1 < altura2) {
                crescimento = altura1 * (taxa1 / 100)
                altura1 += crescimento
                tempo++
            }
            return `Em ${tempo} ano(s) a criança 1 ultrapassara a altura da criança 2  `
        } else if (taxa2 > taxa1 && alt2 < alt1 || alt2 == alt1 && taxa2 > taxa1) {
            while (altura2 < altura1) {
                crescimento = altura2 * (taxa2 / 100)
                altura2 += crescimento
                tempo++
            }
            return `Em ${tempo} ano(s) a criança 1 ultrapassara a altura da criança 2  `
        } else {
            return 'Nenhuma criança ultrapassará a altura da outra'
        }
    }

}


console.log(calcCrescimento(140, 150, 5, 6))