/**
 * Exercício ponto extra
 * 
 * Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . 
 * O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
 */

/**
 * Exercício ponto extra - Natalia França
 */
let texto 


function contarNumeroVogais(texto){
    const tamanhoTexto = texto.length
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let numeroVogais = 0

    for(let contador=0; contador < tamanhoTexto; contador++){
          if(vogais.includes(texto[contador])) {
            numeroVogais++
          } 
    }

    console.log(`O número de vogais do seu texto é ${numeroVogais}`)
}

contarNumeroVogais('testando a quantidade')
contarNumeroVogais('aeiou')
contarNumeroVogais('dfkprtnm gtrprgd')
