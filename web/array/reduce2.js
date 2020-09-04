const alunos = [
    {nome: 'João',  nota: 7.3, bolsista: false},
    {nome: 'Maria',  nota: 9.2, bolsista: true},
    {nome: 'Pedro',  nota: 9.8, bolsista: false},
    {nome: 'Ana',  nota: 8.7, bolsista: false}
]

const todosBolsista = alunos.map(a => a.bolsista).reduce((resultado,bolsista) => resultado && bolsista)
const algumBolsista = alunos.map(a => a.bolsista).reduce((resultado,bolsista) => resultado || bolsista)

console.log(todosBolsista)
console.log(algumBolsista)