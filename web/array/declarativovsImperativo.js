const alunos = [
    {nome: 'maria', nota: 6.3},
    {nome: 'joao', nota: 8.5}
]

let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

const getNota = aluno => aluno.nota
const soma = (total, nota) => total + nota

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)