/**
 * Exercício para definir um plano de atividade pro dog
 */

let nomeDog
let porte
let tempoDisponivel
let atividadeRecomendada

function planejarAtividade(nomeDog, porte, tempoDisponivel){

    switch(porte){
         case 'P':
            atividadeRecomendada = 'Brincar dentro de casa'
            break
        case 'M':  
            atividadeRecomendada = 'Caminhada no quarteirão'
            break
        case 'G':
            atividadeRecomendada = 'Correr no parque'
            break
        default:
            atividadeRecomendada = 'Porte inválido'
            
        }

console.log('-----------')
console.log(`Plano de atividades para o ${nomeDog}`)    
        
    if(tempoDisponivel < 15){
        console.log(`Atividade rápida: ${ atividadeRecomendada }`)
    }else if(tempoDisponivel >= 15 && tempoDisponivel <= 30){
        console.log(`Tempo ideal: ${atividadeRecomendada}`)
    }else if(tempoDisponivel > 30){
        console.log(`Hora da diversão: ${atividadeRecomendada}`)
    }    
   
console.log('-----------')
       
}

planejarAtividade('Dudu', 'P', 10 )
planejarAtividade('Nina', 'M', 15 )
planejarAtividade('Ravache', 'G', 16 )
planejarAtividade('Thor', 'G', 35 )
planejarAtividade('Ravache', 'N', 35 )