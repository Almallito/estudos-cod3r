const calculaSalario = (plano, salario) => {
    let novoSalario = salario
    if (plano == 'A') {
        novoSalario += salario * 0.10
        return novoSalario
    } else if (plano == 'B') {
        novoSalario += salario * 0.15
        return novoSalario
    } else if (plano == 'C') {
        novoSalario += salario * 0.20
        return novoSalario
    } else {
        return 'Plano Invalido'
    }
}

console.log(`
${calculaSalario('A', 1390)}
${calculaSalario('B', 1390)}
${calculaSalario('C', 1390)}
${calculaSalario('D', 1390)}
`)