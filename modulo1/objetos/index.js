// -----Exercícios de interpretação de código-----

//a)

//Matheys Nachtergaele, Virginia Cavendish, canal: 'Globo', horario: '14h'

// Questão 2


//a)
//nome: 'Juca', idade: 3, raca: 'SRD'
//nome: 'Juba', idade: 3, raca: 'SRD'
//nome: 'Jubo', idade: 3, raca: 'SRD'



//Questão 3

//a) false, undefined

//b) o valor false está sendo retornado devido a atribuição false para o objeto backender, já o valor undefined está sendo retornado pois não existe o objeto altura dentro da const pessoa


//----Exercícios de escrita de código----

// Questão 1

//a)
/* const pessoa = {
    nome: 'Gabriel',
    apelidos: ['Suela ', 'Biel ', 'Gab ']
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`) */

//b)
/* const novosApelidos = [...pessoa.apelidos]

novosApelidos.push('bielen ', 'suelito ', 'cabeça ')

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos}`)
 */
// Questão 2


// Questão 3
const carrinho = []

const frutas = {
    nome:[],
    disponibilidade: true

}

function sacolao (fruta) {
    carrinho.push(fruta)
}