/**
 * Exercicio Classificador de Porte automático
 */

let nomeDog 
let pesoDog 

/*
let porteClassificado = pesoDog <= 10 ? 'Pequeno' : 'Médio'

console.log(nomeDog)
console.log(pesoDog)
console.log(porteClassificado)
*/

//Resolução com função

function classificarPorte(nomeDog, pesoDog){
    let porteClassificado = pesoDog <= 10 ? 'Pequeno' : 'Médio'
    console.log(nomeDog)
    console.log(pesoDog)
    console.log(porteClassificado)
}

classificarPorte('Ravache', 20)