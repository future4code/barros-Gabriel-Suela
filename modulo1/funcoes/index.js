// Exercícios de interpretação 

// Questão 1 

// a) 10, 50

// b) a função iria executar da mesma forma, porém não teria nenhum dado no console, pois para isso é necessário que coloquemos o resultado da função dentro dele.

// Questão 2

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

// a ) a função pega um texto digitado pelo usuário no prompt e retorna ele para letras minusculas, após isso com o .includes() ela verifica se o argumento passado dentro dos parenteses está presente no texto digitado pelo usuário, retornando true ou false apropriadamente.

// b )  Eu gosto de cenoura -> true, CENOURA é bom pra vista -> true, Cenouras crescem na terra -> true


// Exercícios de escrita de código

//Questão 1
// a)
const dados = () => {
    'Eu sou Gabriel, tenho 25 anos, moro em Seropédica e sou estudante'
}
console.log(dados)

// b)

const oláPessoa = function (nome, idade, cidade, profissao) {
    return nome, idade, cidade, profissao
}
const nomeUsuario = prompt('Digite seu nome')
const idadeUsuario = Number (prompt('Digite sua idade'))
const cidadeUsuario = prompt('Digite sua cidade')
const profissaoUsuario = prompt('Digite sua profissao')

console.log(`Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}`)

//Questão 2

const soma = function(numero1, numero2){
    return numero1 + numero2
}
const result = soma(20,20)
console.log(result)

// b)

const numbersTest = function(number1, number2){
    return number1 >= number2
} 
const maiorQue = numbersTest(10,18)
console.log(maiorQue)


// c)

const numeroPar = function(numero) {
    return  numero % 2 === 0
}
const meuNumero = numeroPar(823)
console.log(meuNumero)

// d)

const tamanhoFrase = function(string) {
    return string
}
const tamanho = ('meu nome é gabriel')
const maiusculo = tamanho.toUpperCase()
console.log(tamanho.length, maiusculo)


//Questão 3

const soma = function(num1, num2){
    return num1 + num2
}

const sub = function(num1, num2){
    return num1 - num2
}

const mult = function(num1, num2){
    return num1 * num2
}

const div = function(num1, num2){
    return num1 / num2
}
const primeiroNumero = Number (prompt('Digite um número'))
const segundoNumero = Number (prompt('Digite um número'))
const sum = soma(primeiroNumero,segundoNumero)
const subtracao = sub(primeiroNumero,segundoNumero)
const multiplicacao = mult(primeiroNumero,segundoNumero)
const divisao = div(primeiroNumero,segundoNumero)

console.log(sum, subtracao, multiplicacao, divisao)


//Desafios 

//Questão 1 

const arrowFunc = (number) => {
    return number
}
const resultado = arrowFunc(2)
console.log(resultado)

// b)

const arrowSoma = (number1, number2) => {
    number1 + number2 
    arrowFunc
}
const soma = arrowSoma(arrowFunc)

//Questão 2

