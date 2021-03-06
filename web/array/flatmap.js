const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},
{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.2
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)
const notas = escola.map(getNotasDaTurma)

console.log(notas)

Array.prototype.flatmap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasDaTurma)

console.log(notas2)

