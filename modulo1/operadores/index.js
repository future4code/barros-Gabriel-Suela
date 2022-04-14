//Exercício de interpretação

// Questão 1

// console.log("a. ", resultado) > Exibe False
// console.log("b. ", resultado) > Exibe false
// console.log("c. ", resultado) > Exibe True
// console.log("d. ", typeof resultado) > Exibe boolean


//Questão 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// No console será impresso o resultado da concateção entre o primeiroNumero e o segundoNumero porém eles não serão somados pois como padrão o prompt atribui valores string, mesmo que sejam digitados números serão em string. 

//Questão 3

//Para solução, o ideal seria converter esse valor de string para number e desta forma a soma poderá ser feita pois serão dois valores do tipo number. Ficaria desta forma: 

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))


// Exercícios de escrita de código

//Questão 1

let idadeUsuario = Number (prompt('Qual é a sua idade?'))
let idadeAmigo = Number (prompt('Qual é a idade do seu melhor amigo (a)'))
let idadeComparada = idadeUsuario >= idadeAmigo
let idadeDiferente = idadeUsuario - idadeAmigo

console.log(`Sua idade é maior do que a do seu amigo? ${idadeComparada}, ${idadeDiferente}`);

// Questão 2

const numeroPar = Number (prompt('Insira um número par'))
const restoPar = numeroPar % 2

console.log(restoPar)

//C - Todos os resultados são 0
//D - Ao colocar número impar o resultado é 1

//Questão 3

const anoNascimento =  prompt('Qual ano você nasceu?')
const anoAtual =  prompt('Qual é o ano atual?')
const idadeEmAnos = anoAtual - anoNascimento
const idadeEmMeses = idadeEmAnos / 12
const idadeEmDias = idadeEmAnos * 365
const idadeEmHoras = idadeEmDias * 24

console.log(`${idadeEmAnos}`)
console.log('a. ', `Sua idade em meses é ${idadeEmMeses}`)
console.log('b. ', `Sua idade em dias é ${idadeEmDias}`)
console.log('c. ', `Sua idade em horas é ${idadeEmHoras}`)


//Questão 4

const numero1 = Number (prompt('Digite o primeiro número'))
const numero2 = Number (prompt('Digite o segundo número'))

const primeiroMaior = numero1 > numero2
const primeiroIgual = numero1 === numero2
const primeiroDivisivel = numero1 % numero2 === 0
const segundoDivisivel = numero2 % numero1 === 0

console.log(primeiroMaior)
console.log(primeiroIgual)
console.log(primeiroDivisivel)
console.log(segundoDivisivel)