//------ Exercícios de interpretação -----

/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

// Questão 1


// Questão 2

// a) vão ser impressos no console os valores do array que são maiores que 18 (19, 21, 23, 25, 27 e 30)

//b) Não


// Questão 3

// Dependendo do valor do número digitado pelo usuário, o código irá imprimir no console um asterístico, adicionando um asterístico a mais a cada linha do console, até atingir a quantidade de linhas do número digitado pelo usuário.


// ---- Exercícios de escrita de código ----

// Questão 1


 const animaisEstimacao = Number (prompt('Quantos bichinhos de estimação você tem?'))

if (animaisEstimacao === 0 ){
    console.log('Que pena! Você pode adotar um pet!')
} 

let quantidadeDePet = animaisEstimacao

let nomes = []

for (let i = 0; i < quantidadeDePet; i++){
    if (quantidadeDePet > 0){
        nomes.push(prompt('Digite o nome'))
    }
}

console.log(nomes) 

// Questão 2
  const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// Resposta item a.
for (let numeros of lista){
    console.log(numeros)
}
// Resposta item b.
for (let numeros of lista){
    console.log(numeros / 10)
}
// Resposta item c.
let pares = []

for (let numeros of lista){
    if (numeros % 2 == 0){
        pares.push(numeros)
    }
}
console.log(pares)

// Resposta item d.
for (let numeros of lista){
    console.log(`O elemento do index ${lista.indexOf(numeros)} é ${numeros}`)
}
// Resposta item e.
const valorMaximo = Math.max(...lista)
const valorMinimo = Math.min(...lista)

console.log(`O maior valor é ${valorMaximo} e o menor valor é ${valorMinimo}`)
 
 

// -- Desafios --

let fristNumber = Number (prompt('Escolha um número'))

console.log('Vamos jogar!')

let secondNumber = Number (prompt('Chute um número'))

if (secondNumber !== fristNumber){
    prompt('Chute outro número')
}

for (let i = 0; i !== fristNumber; i++){
    console.log(`o numero chutado foi: ${secondNumber}`)
    if (secondNumber < fristNumber){
        console.log('Errou, o número escolhido é maior')
    } else if (secondNumber > fristNumber){
        console.log('Errou, o número escolhido é menor')
    }
}