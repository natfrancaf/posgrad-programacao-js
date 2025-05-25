/**
 * Exercício Calculadora de ração diária
 */

const nomeDog = 'Ravache'

let pesoDog = 10
let estoqueRacao = 1500

let qtdadeDiariaRacao = pesoDog * 30

let duracaoRacao = estoqueRacao / qtdadeDiariaRacao

console.log(`Nome do dog: ${nomeDog}`)
console.log(`Peso do dog: ${pesoDog}`)
console.log("A quantidade recomendada de ração é de " + qtdadeDiariaRacao + " gramas por dia")
console.log("O estoque de ração irá durar " + duracaoRacao + " dias")

