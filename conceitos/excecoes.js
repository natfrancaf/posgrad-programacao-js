/**
 * Exceções e tratamentos de erros
 * 
 * try catch - tenta fazer a ação e pega o erro, caso aconteça
   throw - lançar erro 

*/

try {
    console.log(`Tentando alimentar o Pet...`)
   // throw new Error()
}catch (excecao){
    console.log(excecao)
} finally{
    console.log(`SEMPRE É EXECUTADO`)
}