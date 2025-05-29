/**
    Sintaxe do MOCHA

    describe -> agrupador de testes
    it       -> implementação do teste

    npx = executar pacotes

    ASSERTION/ASSERÇÃO
      verificar se um comportamento está de acordo com o esperado

 */

   /*sintaxe padrao pra implementar testes usando o mocha
describe('Testes do projeto', () => {
    
    it('primeiro teste', () => {

    })

    it('segundo teste', () =>{

    })
})**/


import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do projeto', () => {
    
    it('deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        //verifique se <valor atual> é igual a <valor esperado>

    })

    it('segundo teste', () =>{

    })
})
