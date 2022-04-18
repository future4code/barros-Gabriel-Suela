// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt('Digite a altura do retângulo')
const largura = prompt('Digite a largura do retângulo')
const areaRetangulo = altura * largura
console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt('Digite o ano atual')
const anoNascimento = prompt('Digite o seu ano de nascimento')
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const peso1 = peso
const altura1 = altura
return peso1 / (altura1 * altura1)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt('Digite seu nome')
const idade = prompt ('Digite sua idade')
const email = prompt ('Digite seu email')  // implemente sua lógica aqui
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor1 = prompt('Digite sua cor favorita')
const cor2 = prompt('Digite sua cor favorita')
const cor3 = prompt('Digite sua cor favorita')
const coresFavoritas = [cor1, cor2, cor3]
console.log(coresFavoritas)
// implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const texto = string
return texto.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const custoEspecatuclo = custo
const valorDeIngresso = valorIngresso
const ingressosVendidos = custo / valorIngresso
return ingressosVendidos  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const valor1 = string1
const valor2 = string2
const verificar = string1 > string2
return verificar
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const lista = array
return lista[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const arr = array
const lastArr = arr.pop()
return lastArr
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const arr = array
const lastArr = arr.pop()
arr.push(arr.splice(0,1,lastArr)[0])
return arr
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const strA = string1.toUpperCase()
const strB = string2.toUpperCase()
const comparacao = strA == strB
return comparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = prompt('Qual o ano atual?')
const anoNascimento = prompt('Qual seu ano de nascimento')
const anoCarteira = prompt('Qual ano sua carteira foi emitida')

const idade = anoAtual / anoNascimento
const renova = anoAtual - anoCarteira

if (idade <= 20 && renova >= 5){
  console.log(true)
} else {
  console.log(false)
} 


}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
