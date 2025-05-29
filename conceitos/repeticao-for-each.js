/**
 * Estruturas de repetição for-each
 *  - mais usado no mercado
 *  - usado com listas(percorre a lista e executa a acao para cada item da lista)
 */

/**
 * Exemplo 1
 */
const listaDeAlunos =  [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

//aluno é o indice e a ação fica dentro de uma função de seta
listaDeAlunos.forEach(aluno =>{
    console.log(aluno)
})

/**
 * Exemplo 2
 */

const listaDeAlunosENotas =  [
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 8
    },
    {
        nome: 'Leandro',
        nota: 9
    },
    {
        nome: 'Ana',
        nota: 8
    },
     {
        nome: 'Lucas',
        nota: 10
    },
    
   
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})
