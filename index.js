/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção!!")
console.table([{
    nome: 'Natalia',
    turma: '02',
    disciplina: 'prog js'
},
{
    nome: 'Daniel',
    turma: '02',
    disciplina: 'Prog JS'
}
])

/**
 * Constante e Variáveis
 * 
 * Javascript é dinamicamente tipada. Não precisa declarar o tipo da variável
 */

//const - para informações que nunca mudam
//var ou let - para informações que podem mudar

//informaçoes de um cachorro que não mudam
const nome = 'Ravache'
const raca = 'Pastor alemão'
const sexo = 'Macho'
const cor = 'Marrom'
const dataDeNascimento = '01/02/2020'
const porte = 'G'

//informações que mudam
let idade = 5
let peso = 10.5
let vacinado = true //booleano no js eh true or false
let castrado = false
let tamanho = 'G'


/**Tipos de dados Javascript 
 * 
 * String
 * Number (inteiro/real)
 * Booleano
 * Array (vetor/matriz)
 * 
 * undefined ( variavel sem valor, mas que vai receber um valor posteriormente)
 * null (valor definido como null)
 * 
 * BigInt (Number para numeros extramamente grandes)
 * Symbol (identificador único)
 */

/**
 * Strings
 * 
 * Formas de declaração
 * 
 * 'Turma 02 do PGATS' //aspas simples ou single quote
 * "Turma 02 do PGATS" //aspas duplas ou double quotes
 *  `Turma 02 do PGATS` - template strings
 * 
 */



const turma = "02"
const numeroAula = "03"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril") //concatenação


console.log(`Aula 03 da Turma ${ turma } no Sábado dia 05 de Abril`)  //Interpolação de strings
console.log(`Aula ${ numeroAula } da Turma ${ turma} no Sábado dia ${ data}`)  //Interpolação de strings


//console.log(data.length) //tamanho da string

//split - separar a string

const nomesDeAlunos = "Daniel Natalia Fabio Lucas"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ") // no parenteses define o ponto de separação da string
console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())  //passar todas as letras  as strings para minuscula
console.log(nomesDeAlunos.toUpperCase())  //passar todas as letras  as strings para maiuscula


console.log(nomesDeAlunos.includes("Daniel") )//função de strings que retorna um booleano
 
console.log(nomesDeAlunos.replaceAll('a','i')) //substituição numa string

const conceitosLogica = "     inteiro real cadeia de caracteres...      "

console.log(conceitosLogica.trim()) //tirar espaços desnecessário do inicio ou fim de uma string

let dataParaCortar = "05 de Abril"
const cpf = "08649338607"

console.log(dataParaCortar.slice(0, 2))// fazer um recorte numa string, pegar digitos especificos

console.log(cpf.slice(0, 3)) //exemplo pegar os 3 primeiros digitos do cpf

/**
 * Operadores = comparação, lógica, aritmetica
 * 
 * VALOR A maior que VALOR B
 * VALOR A menor que B
 * 
 *  A == B --> VARIAVEL A possui o mesmo valor que VARIAVEL B
 * A === B --> VARIAVEL A possui o mesmo tipo e o mesmo valor de dado que a VARIAVEL B
 * 
 */

// == compara valores (coersão de tipos)
// === estritamente igual (valores e tipos) compara considerando o tipo da variavel e depois compara os valores