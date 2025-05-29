/**
 * Estruturas de repetição - While
 * 
 *   enquanto (pet não estiver cansado); faca {
 *           ação 
 *    }
 * 
 */


let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0


while(quantidadeVoltasAtual < voltasAteFicarCansado){
    console.log('Dar uma volta na quadra')

    quantidadeVoltasAtual++ //importante colocar isso pra não cair no looping infinito
}