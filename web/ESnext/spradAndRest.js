
//usando sprad com objeto
const funcionario = {nome: 'Maria', salario: 12450.00}
const clone = {ativo: true, ...funcionario}
console.log(funcionario)
console.log(clone)

//sprad com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafael', ...grupoA]
console.log(grupoFinal)