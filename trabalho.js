/**
 * Trabalho Final - Natalia França
 */

//QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas'
function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

//verificarSePodeSerAdotado 'QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção'
function verificarSePodeSerAdotado(idade, porte){
    if(idade == 1 && porte == 'M'){
    return true
}else {
    return false
}
}

//QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário
function calcularConsumoDeRacao(nome, idade, peso){
    let qtdadeDiariaRacao = peso * 300
    //console.log(`A quantidade de ração diára para o ${nome} é de ${qtdadeDiariaRacao}`)
    return qtdadeDiariaRacao
}

//QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada
function decidirTipoDeAtividadePorPorte(porte){
    let atividadeRecomendada
    switch(porte){
         case 'pequeno':
            atividadeRecomendada = 'brincar dentro de casa'
            break
        case 'medio':  
            atividadeRecomendada = 'Caminhada no quarteirão'
            break
        case 'grande':
            atividadeRecomendada = 'Correr no parque'
            break
        default:
            atividadeRecomendada = 'Porte inválido'
            
        }
        return(atividadeRecomendada)

}


//QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona'
async function buscarDadoAsync() {
  return 'Pipoca';
}


export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
    

}