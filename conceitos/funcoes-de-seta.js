/**
 * Funções de seta/fleca
 * 
 * sintaxe: () => {}
 * 
 */


//funcao nomeada, com parametro, sem retorno
const exibirNomeDog = (nome) =>{
    console.log(nome)
}

//funcao com valor padrao. Se nenhum valor for informado, usa o default
const exibirPorteDoDog = (porte = 'ND') =>{
    console.log(porte)
}

//funcao nomeada, com parametro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}


//funcao que retorna um objeto
const obterObjetoDog = () => {
    return{
        nome: 'Ravache',
        peso: 11.5
    }

}

//utilizando as funções
exibirNomeDog("Nina")
console.log(obterNomeDoDogFormatado("ravache"))
console.log(obterObjetoDog())


