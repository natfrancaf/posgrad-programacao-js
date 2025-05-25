/**
 * Exercicio 01
 */

const nome = "Ravache", raca = "pastor alemão"
let idade = 8
let peso = "20 kg"
let adotado = true

const nomeTag = nome.toUpperCase()
const racaPrimLetra = raca.slice(0,1)
const racaTag = racaPrimLetra.toUpperCase() + raca.slice(1).toLowerCase()


console.table({
    nomeTag,
    racaTag,
    peso
})