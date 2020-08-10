const pilotos = ['Vettel', 'Allonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemnto do array
pilotos.push('Verstappen') // add elemento na ultima posicao
pilotos.shift() //remove o primeiro elemento
pilotos.unshift('Hamilton') // adiciona o primeiro elemento
pilotos.splice(2,0, 'Bottas','Massa')//no indice 2 ele nao ira remover nenhum elemento e ira adicionar 2 novos elementos
pilotos.splice(3,1) //removeu um unico elemento no indice 3 novos elemento
const pilotos2 = pilotos.slice(2) // retorna um novo array, pode tambem setar a faixa de elementos que ele ira coletar no array original

