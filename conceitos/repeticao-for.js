/**
 * Estruturas de repetição - FOR
 * 
 *
 */

/**
 * Exemplo 1
 */
const quantidadeCalculada = 3

for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    //acao de dar um petisco
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}


/**
 * Exemplo 2
 */

const gatos = ['Lessie', 'Pony', 'Fumaca']

for(let indice = 0; indice < gatos.length; indice++){
    console.log(`Dando o petisco para ${gatos[indice]}`)
}