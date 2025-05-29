/**
 * Exercício ponto extra  - Natalia França
 * 
 * Criar uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings
 */

const lista = ['palavra1', 3, 'teste', 5, 'teste2', 'quatro', 9, 10]


function removerStrings(lista){
    
    const listaFinal = lista.filter(itemLista => typeof itemLista === 'number')
    console.log(listaFinal)
}

removerStrings(lista)