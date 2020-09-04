function media(matricula, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]
    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    return `A media do aluno ${matricula} foi: ${media} o aluno esta ${media < 5 ? 'Reprovado' : 'Aprovado'}`
}

console.log(media(102451, 2.8, 7.5, 6.2))